import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// firebase
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';

// Formulario
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// routing
import { Routes, RouterModule } from '@angular/router';

/*Componentes*/
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { RegistroComponent } from './registro/registro.component';
import { PlantasComponent } from './plantas/plantas.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { VistaInicioComponent } from './vista-inicio/vista-inicio.component';
import { VistaCestaComponent } from './vista-cesta/vista-cesta.component';


const appRoutes: Routes = [
  { path: '', component: VistaInicioComponent},
  { path: 'tienda', component: PlantasComponent},
  { path: 'producto/:idproducto', component: VistaProductoComponent},
  { path: 'cesta', component: VistaCestaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BarranavegacionComponent,
    RegistroComponent,
    PlantasComponent,
    VistaProductoComponent,
    VistaInicioComponent,
    VistaCestaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
