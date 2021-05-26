import { Injectable } from '@angular/core';
import {Cesta} from '../../models/cesta';
import {FirestoreService} from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private cestas: Cesta[];

  constructor(private firestoreService: FirestoreService) {
    this.cestas = [];
  }

  getcestas() {
    return this.cestas;
  }

  agregaraCesta(cesta: Cesta): void {
    this.cestas.push(cesta);
  }
  agregarObjetoCestaFirebase(cesta: Cesta): void{
    const data = {
      cantidad: cesta.cantidad,
      idplanta: cesta.idplanta,
      idusuario: cesta.idusuario
    };
    this.firestoreService.createObjetoCesta(data).then(() => {
      alert('Añadido correctamente');
    }, (error) => {
      console.error(error);
    });
  }
}
