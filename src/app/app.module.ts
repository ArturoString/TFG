import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';

// Formulario
import { ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ArticuloService } from '../app/services/articulo.service';

/*Componentes*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { RegistroComponent } from './registro/registro.component';
import { CeldasDeArticulosComponent } from './celdas-de-articulos/celdas-de-articulos.component';
import { ArticuloListComponent } from './celdas-de-articulos/articulo-list/articulo-list.component';
import { ArticulocComponent } from './celdas-de-articulos/articuloc/articuloc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    BarranavegacionComponent,
    RegistroComponent,
    CeldasDeArticulosComponent,
    ArticuloListComponent,
    ArticulocComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    ArticuloService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
