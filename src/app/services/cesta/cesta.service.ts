import { Injectable } from '@angular/core';
import {Cesta, CestaConDatosProducto} from '../../models/cesta';
import {FirestoreService} from '../firestore/firestore.service';
import {Plant} from '../../models/plant';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private cestas: Cesta[];
  private plantas: Plant[];
  private objetoCestaConDatosProducto: CestaConDatosProducto[];
  idusuarioFire: string;

  constructor(private firestoreService: FirestoreService) {
    this.cestas = [];
    this.plantas = [];
    this.objetoCestaConDatosProducto = [];
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

  devolverObjetosCesta(idUsuario: string){
    this.firestoreService.getObjetosDeCesta().subscribe((usuariosSnapshot) => {
      usuariosSnapshot.forEach((usuarioData: any) => {
        this.idusuarioFire = usuarioData.payload.doc.data()['idusuario'];
        if (this.idusuarioFire == idUsuario){
          this.cestas.push({
            cantidad: usuarioData.payload.doc.data()['cantidad'],
            idplanta: usuarioData.payload.doc.data()['idplanta'],
            idusuario: usuarioData.payload.doc.data()['idusuario']
          });
        }
    });
  });
    // Saco todas las plantas
    this.firestoreService.getPlantas().subscribe((plantasSnapshot) => {
      this.plantas = [];
      plantasSnapshot.forEach((plantaData: any) => {
        this.plantas.push({
          id: plantaData.payload.doc.id,
          nombre: plantaData.payload.doc.data()['nombre'],
          descripcion: plantaData.payload.doc.data()['descipcion'],
          precio: plantaData.payload.doc.data()['precio'],
          stock: plantaData.payload.doc.data()['stock'],
          tipo: plantaData.payload.doc.data()['tipo'],
          url: plantaData.payload.doc.data()['url'],
        });
      });
      // ahora recorro el metodo para obtere el producto final de la cesta
      for (const articuloCesta of this.cestas){
        for (const planta of this.plantas) {
          if (articuloCesta.idplanta == planta.id){
            this.objetoCestaConDatosProducto.push({
              cantidad: articuloCesta.cantidad,
              idplanta: planta.id,
              nombre: planta.nombre,
              descripcion: planta.descripcion,
              url: planta.url,
              precio: planta.precio,
            });
          }
        }
      }
    });

    return this.objetoCestaConDatosProducto;
}
}
