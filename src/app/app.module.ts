import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ComprasComponent } from './componentes/compras/compras.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { InformesComponent } from './componentes/informes/informes.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    PieComponent,
    PaginaInicioComponent,
    ComprasComponent,
    VentasComponent,
    InventarioComponent,
    ProveedoresComponent,
    InformesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
