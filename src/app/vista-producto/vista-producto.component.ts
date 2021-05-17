import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlantaModule} from '../models/planta/planta.module';
import {FirestoreService} from '../services/firestore/firestore.service';
import {Observable} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {
  // formulario + y -
  inputCantidad = new FormControl(1);
  precioTotal: string;
  // objetos para la bd
  lista: Observable<any>;
  plantaObj: PlantaModule;
  // Objetos para el formulario
  public nombre: string;
  public descripcion: string;
  public precio: number;
  public stock: number;
  public tipo: string;
  public url: string;
  constructor(private rutaActiva: ActivatedRoute, private firestoreService: FirestoreService) {
    this.plantaObj = new PlantaModule();
    this.precioTotal = '0';
  }

  ngOnInit(): void {
    // Obtengo el id por la url
    this.plantaObj.setId = this.rutaActiva.snapshot.params.idproducto;
    // obtengo los datos desde firebase segun la id
    const editSubscribe = this.firestoreService.getPlanta(this.plantaObj.getId).subscribe((planta) => {
      this.url = planta.payload.data()['url'];
      this.nombre = planta.payload.data()['nombre'];
      this.descripcion = planta.payload.data()['descripcion'];
      this.precio = planta.payload.data()['precio'];
      this.stock = planta.payload.data()['stock'];
      this.tipo = planta.payload.data()['tipo'];

      this.precioTotal = planta.payload.data()['precio'];
      editSubscribe.unsubscribe();
    });
    // por defecto es la cantidad 1
    // this.precioTotal = String(this.precio);
  }
  aumentarContador(): void{
    if ((this.inputCantidad.value > 0) && (this.inputCantidad.value < this.stock)){
      this.inputCantidad.setValue(this.inputCantidad.value + 1);
    }else {
      this.inputCantidad.setValue(1);
    }
    // Aumento la cantidad entonces cabio la variable precio total
    this.precioTotal = String(this.precio * this.inputCantidad.value);
  }
  disminuirContador(): void{
    if ((this.inputCantidad.value > 0) && (this.inputCantidad.value < this.stock)){
      if (this.inputCantidad.value !== 1){
        this.inputCantidad.setValue(this.inputCantidad.value - 1);
      } else {
        this.inputCantidad.setValue(1);
      }
      // Aumento la cantidad entonces cabio la variable precio total
      this.precioTotal = String(this.precio * this.inputCantidad.value);
  }
}
}
