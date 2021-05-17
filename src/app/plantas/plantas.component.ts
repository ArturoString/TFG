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
      plantasSnapshot.forEach((plantaData: any) => {
        this.plantas.push({
          id: plantaData.payload.doc.id,
          data: plantaData.payload.doc.data()
        });
      });
    });
  }
}
