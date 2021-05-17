import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import firebase from 'firebase';
import {environment} from '../../environments/environment';
import {FirestoreService} from '../services/firestore/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuarioFromGroup = new FormGroup({
    correo: new FormControl(''),
    password: new FormControl(''),
    usuario: new FormControl(''),
  });
  constructor(private firestoreService: FirestoreService) {
    this.usuarioFromGroup.setValue({
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
      password: form.password,
      usuario: form.usuario
    };
    this.firestoreService.createUsuario(data).then(() => {
      console.log('Documento creado exitósamente!');
      this.usuarioFromGroup.setValue({
        correo: '',
        password: '',
        usuario: ''
      });
    }, (error) => {
      console.error(error);
    });
  }
}
