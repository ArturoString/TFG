import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  public plantas = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }
  ngOnInit(): void{
    this.firestoreService.getPlantas().subscribe((plantasSnapshot) => {
      this.plantas = [];
      plantasSnapshot.forEach((catData: any) => {
        this.plantas.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
    });
  }/*
  public editCat(documentId) {
    let editSubscribe = this.firestoreService.getCat(documentId).subscribe((cat) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.newCatForm.setValue({
        id: documentId,
        nombre: cat.payload.data()['nombre'],
        url: cat.payload.data()['url']
      });
      editSubscribe.unsubscribe();
    });
  }*/
}
