import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  // PLANTAS
  // Crea una nuevo Planta
  public createPlantas(data: {descripcion: string, nombre: string, precio: number, stock: number, tipo: string, url: string}) {
    return this.firestore.collection('plantas').add(data);
  }
  // Obtiene una Planta
  public getPlanta(documentId: string) {
    return this.firestore.collection('plantas').doc(documentId).snapshotChanges();
    // return this.firestore.collection('plantas').doc(documentId);
  }
  // Obtiene todos las Plantas
  public getPlantas() {
    return this.firestore.collection('plantas').snapshotChanges();
  }
  // Actualiza una Planta
  public updatePlantas(documentId: string, data: any) {
    return this.firestore.collection('plantas').doc(documentId).set(data);
  }
  // USUARIO
  // Crea un nuevo Usuario
  public createUsuario(data: {correo: string, password: string, usuario: string}) {
    return this.firestore.collection('usuarios').add(data);
  }
  // Obtiene un Usuario
  public getUsuario(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).snapshotChanges();
    // return this.firestore.collection('plantas').doc(documentId);
  }
  // Obtiene todos los Usuarios
  public getUsuarios() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }
  // Actualiza un Usuario
  public updateUsuarios(documentId: string, data: any) {
    return this.firestore.collection('usuarios').doc(documentId).set(data);
  }
  // Cesta
  // Crea un nuevo objetos de cesta
  public createObjetoCesta(data: {cantidad: number, idplanta: string, idusuario: string}) {
    return this.firestore.collection('cesta').add(data);
  }
  // Obtiene un objetos de cesta
  public getObjetoCesta(documentId: string) {
    return this.firestore.collection('cesta').doc(documentId).snapshotChanges();
  }
  // Obtiene todos los objetos de cesta
  public getObjetosDeCesta() {
    return this.firestore.collection('cesta').snapshotChanges();
  }
  // Actualiza un objetos de cesta
  public updateObjetoCesta(documentId: string, data: any) {
    return this.firestore.collection('cesta').doc(documentId).set(data);
  }
}
