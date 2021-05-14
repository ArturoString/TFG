import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Articulo } from '../models/articulo';
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  productlist: AngularFireList<any>;
  // En esta variable almaceno temporalmente los datos por si los usamos

  selectARticulo: Articulo = new Articulo();

  constructor(private  firebase: AngularFireDatabase) { }
  /* Metodos para extraer de la bd */
  getALLArticulos(): AngularFireList<any>{
    return this.productlist = this.firebase.list('articulos');
  }
  insertArticulo(articulo: Articulo): void{
    this.productlist.push({
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      stock: articulo.stock,
      tipo: articulo.tipo
    });
  }
  updateArticulo(articulo: Articulo): void{
    this.productlist.update(articulo.$id, {
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      stock: articulo.stock,
      tipo: articulo.tipo
    });
  }
  deleteArticulo($id: string): void{
    this.productlist.remove($id);
  }
}
