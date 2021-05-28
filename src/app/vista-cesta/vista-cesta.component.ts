import { Component, OnInit } from '@angular/core';
import {CestaService} from '../services/cesta/cesta.service';
import {CestaConDatosProducto, ObjetosAPagar} from '../models/cesta';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vista-cesta',
  templateUrl: './vista-cesta.component.html',
  styleUrls: ['./vista-cesta.component.css']
})
export class VistaCestaComponent implements OnInit {
  public objetoCesta: CestaConDatosProducto[];
  public precioTotal: number;
  public arrayProductoAPagar: ObjetosAPagar[];
  constructor(private cestaService: CestaService, private router: Router) {
    this.objetoCesta = [];
    this.arrayProductoAPagar = [];
    this.precioTotal = 0;
  }

  ngOnInit(): void {
    this.actualizarArrayObjetosCesta();
    for (const prod of this.objetoCesta){
      this.precioTotal = this.precioTotal + prod.precio;
    }
  }

  borrarObjetoCesta(idObjeto: string): void{
      this.cestaService.borarObjeto(idObjeto);
      // this.actualizarArrayObjetosCesta();
  }
  actualizarArrayObjetosCesta(): void{
    // this.objetoCesta.splice(0, this.objetoCesta.length);
    const idUsuario = localStorage.getItem('id');
    this.objetoCesta = this.cestaService.devolverObjetosCesta(idUsuario);
    for (const prod of this.objetoCesta){
      this.precioTotal = this.precioTotal + prod.precio;
    }
  }
  refrescar(): void{
       this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
       this.router.navigate(['tienda']);
       });
    // window.location.reload();
  }
  addPagoTotal(precio: number, cantidad: number, idObjeto: string): void{
    let encontrado = false;
    let i = 0;
    if (this.arrayProductoAPagar.length > 0){
                do {
                  if (this.arrayProductoAPagar[i]['idObjeto'] === idObjeto){
                    // Lo borro porque eso significa que esta
                    this.precioTotal -=  precio * cantidad;
                    this.arrayProductoAPagar.splice(i, 1);
                    encontrado = true;
                    break;
                  }else{
                    encontrado = false;
                    if (i === this.arrayProductoAPagar.length - 1){
                      // Lo agrego porque eso es que no esta
                      this.precioTotal +=  precio * cantidad;
                      this.arrayProductoAPagar.push({
                        idObjeto: idObjeto,
                        cantidad: cantidad,
                        precio: precio,
                      });
                      encontrado = true;
                      break;
                    }
                  }
                  i++;
                }while (encontrado === false || i <= this.arrayProductoAPagar.length - 1);
    }else {
      this.precioTotal +=  precio * cantidad;
      this.arrayProductoAPagar.push({
        idObjeto: idObjeto,
        cantidad: cantidad,
        precio: precio,
      });
    }
  }
  // Metodo del boton pagar
  pagarMetodo(): void{
    for (const objeto of this.arrayProductoAPagar){
      this.cestaService.borarObjeto(objeto.idObjeto);
    }
    this.precioTotal = 0;
    this.arrayProductoAPagar = [];
    alert('Pedido realizado con éxito');
  }
}
