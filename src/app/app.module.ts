import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './componentes/login/login.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    PieComponent,
    PaginaInicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
