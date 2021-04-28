class Planta {
  private nombre: string;
  private descripcion: string;
  private precio: number;
  private stock: number;

  constructor(nombre: string, descripcion: string, precio: number, stock: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
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
}
