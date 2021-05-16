import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlantaModule {
   id: string;
   nombre: string;
   descripcion: string;
   precio: number;
   stock: number;
   tipo: string;
   url: string;

  get getId(): string {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(value: string) {
    this.nombre = value;
  }

  get getDescripcion(): string {
    return this.descripcion;
  }

  set setDescripcion(value: string) {
    this.descripcion = value;
  }

  get getPrecio(): number {
    return this.precio;
  }

  set setPrecio(value: number) {
    this.precio = value;
  }

  get getStock(): number {
    return this.stock;
  }

  set setStock(value: number) {
    this.stock = value;
  }
  get getTipo(): string {
    return this.tipo;
  }

  set setTipo(value: string) {
    this.tipo = value;
  }
  get getUrl(): string {
    return this.url;
  }

  set setUrl(value: string) {
    this.url = value;
  }
}
