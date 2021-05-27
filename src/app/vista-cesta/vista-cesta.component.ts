import { Component, OnInit } from '@angular/core';
import {CestaService} from '../services/cesta/cesta.service';
import {CestaConDatosProducto} from '../models/cesta';

@Component({
  selector: 'app-vista-cesta',
  templateUrl: './vista-cesta.component.html',
  styleUrls: ['./vista-cesta.component.css']
})
export class VistaCestaComponent implements OnInit {
  public objetoCesta: CestaConDatosProducto[];
  constructor(private cestaService: CestaService) {
    const idUsuario = localStorage.getItem('id');
    this.objetoCesta = this.cestaService.devolverObjetosCesta(idUsuario);
  }

  ngOnInit(): void {
  }

}
