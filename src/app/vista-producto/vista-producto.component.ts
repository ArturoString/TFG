import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlantaModule} from '../models/planta/planta.module';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {
  idArticulo: string;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idArticulo = this.rutaActiva.snapshot.params.idproducto;
  }
}
