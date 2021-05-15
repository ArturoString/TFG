import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// firebase
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';

// Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// routing
import { Routes, RouterModule } from '@angular/router';

/*Componentes*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { RegistroComponent } from './registro/registro.component';
import { PlantasComponent } from './plantas/plantas.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';

const appRoutes: Routes = [
  { path: '', component: PlantasComponent},
  { path: 'producto/:idproducto', component: VistaProductoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    BarranavegacionComponent,
    RegistroComponent,
    PlantasComponent,
    VistaProductoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
