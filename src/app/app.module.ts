import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*import {Routes} from '@angular/router';*/

import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore

/*Componentes*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { RegistroComponent } from './registro/registro.component';
import {environment} from '../environments/environment';
import { CeldasDeArticulosComponent } from './celdas-de-articulos/celdas-de-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    BarranavegacionComponent,
    RegistroComponent,
    CeldasDeArticulosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Import firebase
    AngularFirestoreModule, // Import firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
