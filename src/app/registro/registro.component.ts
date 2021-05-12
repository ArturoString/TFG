import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import firebase from 'firebase';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email = new FormControl('');
  contra = new FormControl('');
  mensajeErrorCorreo = '';
  mensajeErrorContra = '';
  constructor() {}

  ngOnInit(): void {
    this.mensajeErrorCorreo = '';
  }

  inicioSesion(e): void {
    // e.preventDefault();
    this.mensajeErrorCorreo = '';
    this.mensajeErrorContra = '';

    if (this.email.value.toString().length === 0)
    {
      this.mensajeErrorCorreo = 'Rellene el correo';
    }
    if (this.contra.value.toString().length < 6)
    {
      this.mensajeErrorContra = 'La contraseña necesita mínimo 6 caracteres';
    }
    // Esto significa que no tiene ningun error
    if ((this.mensajeErrorCorreo.toString().length === 0) && (this.mensajeErrorContra.toString().length === 0))
    {
      // firebase
      firebase.initializeApp(environment.firebaseConfig);
      const auth = firebase.auth();

      auth.createUserWithEmailAndPassword(this.email.value, this.contra.value)
        .then(userCredential => {
          // Reseteo el valor del formulario una vez me devuelva las User Credentials porque eso es que todo fue bien en la insercion
          this.email.setValue('');
          this.contra.setValue('');
          // Tras el reseteo de los campos  cerraremos el modal
          // $(this).unbind('submit').submit();
          console.log('Registrado');
        });
    }
  }
}
