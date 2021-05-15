import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  // Crea un nuevo gato
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('plantas').add(data);
  }
  // Obtiene un gato
  public getCat(documentId: string) {
    return this.firestore.collection('plantas').doc(documentId).snapshotChanges();
  }
  // Obtiene todos los gatos
  public getCats() {
    return this.firestore.collection('plantas').snapshotChanges();
  }
  // Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('plantas').doc(documentId).set(data);
  }
}
