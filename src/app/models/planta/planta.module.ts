import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlantaModule {
  private id: number;
  private nombre: string;
  private descripcion: string;
  private precio: number;
  private stock: number;
  private tipo: string;

  constructor(id: number, nombre: string, descripcion: string, precio: number, stock: number, tipo: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.tipo = tipo;
  }

  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
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
}
