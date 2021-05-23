import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FirestoreService} from '../services/firestore/firestore.service';
import CryptoJS from 'crypto-js';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.css']
})
export class BarranavegacionComponent implements OnInit {
  // Logon variables
  lEmail = new FormControl('');
  lContra = new FormControl('');
  public usuarios = [];
  public resEmail: string;
  public resPass: string;
  closeResult = '';
  // Registo veriables
  rUsuario = new FormControl('');
  rEmail = new FormControl('');
  rContra = new FormControl('');
  // Registrado
  registrado: boolean;
  // constructor
  constructor(private firestoreService: FirestoreService, private modalService: NgbModal) {
    if (localStorage.getItem('registrado') === 'false'){
      this.inicioSesionElUsuario(false);
    }else{
      this.inicioSesionElUsuario(true);
    }
  }

  ngOnInit(): void {
    this.resEmail = '';
    this.resPass = '';
  }
  inicioSesion(): void {
    // e.preventDefault();
      this.resEmail = '';
      this.resPass = '';
      this.firestoreService.getUsuarios().subscribe((usuariosSnapshot) => {
        usuariosSnapshot.forEach((usuarioData: any) => {
          this.resEmail = usuarioData.payload.doc.data()['correo'];
          if (this.resEmail == this.lEmail.value){
            this.resPass = usuarioData.payload.doc.data()['password'];
            if (this.resPass == CryptoJS.SHA256(this.lContra.value).toString()){
              console.log('Login correcto');
              // Almaceno en en una variable global
              localStorage.setItem('usuario', usuarioData.payload.doc.data()['usuario']);
              localStorage.setItem('email', this.resEmail);
              alert('Login Correcto');
              // Muestro los botones
              this.inicioSesionElUsuario(true);
            }else{
              console.log('El correo existe pero no con esa contraseña');
            }
          }else{
            alert('Login incorrecto');
          }
        });
      });
  }
  public nuevoUsuario(): void {
    const data = {
      correo: this.rEmail.value.toString(),
      password: CryptoJS.SHA256(this.rContra.value.toString()).toString(), // encripto la password
      usuario: this.rUsuario.value
    };
    this.firestoreService.createUsuario(data).then(() => {
      console.log('Documento creado exitósamente!');
      // Pongo los campos vacios otra vez
      this.rUsuario.value('');
      this.rEmail.value('');
      this.rContra.value('');
      alert('Registro correcto');
    }, (error) => {
      console.error(error);
    });
  }
  // Control del login
  public inicioSesionElUsuario(logeado: boolean): void {
   this.registrado = logeado;
   if (this.registrado == true){
     localStorage.setItem('registrado', 'true');
   }else{
     localStorage.setItem('registrado', 'false');
   }
  }
  public cerrarSesion(): void{
    this.inicioSesionElUsuario(false);
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
