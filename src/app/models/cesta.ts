export interface Cesta {
  cantidad: number;
  idplanta: string;
  idusuario: string;
}
//
export interface Cesta2 {
  idObjeto: string;
  cantidad: number;
  idplanta: string;
  idusuario: string;
}

export interface CestaConDatosProducto {
  idObjeto: string;
  cantidad: number;
  idplanta: string;
  nombre: string;
  descripcion: string;
  url: string;
  precio: number;
}

export interface ObjetosAPagar{
  idObjeto: string;
  cantidad: number;
  precio: number;
}
