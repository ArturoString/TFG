import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.css']
})
export class BarranavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickAddTodo(): void{
    alert('hola!');
  }
}
