export interface Cesta {
  cantidad: number;
  idplanta: string;
  idusuario: string;
}

export interface CestaConDatosProducto {
  cantidad: number;
  idplanta: string;
  nombre: string;
  descripcion: string;
  url: string;
  precio: number;
}
