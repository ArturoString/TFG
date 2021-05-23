import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FirestoreService} from '../services/firestore/firestore.service';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public registroFromGroup = new FormGroup({
    correo: new FormControl(''),
    password: new FormControl(''),
    usuario: new FormControl(''),
  });
  constructor(private firestoreService: FirestoreService) {
    this.registroFromGroup.setValue({
      correo: '',
      password: '',
      usuario: ''
    });
  }

  ngOnInit(): void {
  }

  inicioSesion(e): void {
    // e.preventDefault();
    // firebase

    }
  public nuevoUsuario(form) {
    const data = {
      correo: form.correo,
      password: CryptoJS.SHA256(form.password.toString()).toString(), // encripto la password
      usuario: form.usuario
    };
    this.firestoreService.createUsuario(data).then(() => {
      console.log('Documento creado exitósamente!');
      this.registroFromGroup.setValue({
        correo: '',
        password: '',
        usuario: ''
      });
    }, (error) => {
      console.error(error);
    });
  }
}
