import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FirestoreService} from '../services/firestore/firestore.service';
import CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  contra = new FormControl('');
  mensajeErrorCorreo = '';
  mensajeErrorContra = '';
  public usuarios = [];
  public resEmail: string;
  public resPass: string;

  constructor(
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.mensajeErrorCorreo = '';
    this.resEmail = '';
    this.resPass = '';

  }

  inicioSesion(e): void {
    // e.preventDefault();
    this.mensajeErrorCorreo = '';
    this.mensajeErrorContra = '';

    if (this.email.value.toString().length === 0)
    {
      this.mensajeErrorCorreo = 'Rellene el correo';
      alert(this.mensajeErrorCorreo);
    }
    if (this.contra.value.toString().length < 6)
    {
      this.mensajeErrorContra = 'La contraseña necesita mínimo 6 caracteres';
      alert(this.mensajeErrorContra);
    }
    // Esto significa que no tiene ningun error
    if ((this.mensajeErrorCorreo.toString().length === 0) && (this.mensajeErrorContra.toString().length === 0))
    {
      this.resEmail = '';
      this.resPass = '';
      this.firestoreService.getUsuarios().subscribe((usuariosSnapshot) => {
        usuariosSnapshot.forEach((usuarioData: any) => {
            this.resEmail = usuarioData.payload.doc.data()['correo'];
            if (this.resEmail == this.email.value){
              this.resPass = usuarioData.payload.doc.data()['password'];
              if (this.resPass == CryptoJS.SHA256(this.contra.value).toString()){
                console.log('Login correcto');
                // Almaceno en en una variable global
                localStorage.setItem('usuario', usuarioData.payload.doc.data()['usuario']);
                localStorage.setItem('email', this.resEmail);
              }else{
                console.log('El correo existe pero no con esa contraseña');
              }
            }
        });
      });
    }
  }
  close(): void {
  // write your code
  }

}
