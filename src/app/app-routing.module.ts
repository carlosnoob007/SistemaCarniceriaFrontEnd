import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ComprasComponent } from './componentes/compras/compras.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { InformesComponent } from './componentes/informes/informes.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'PaginaInicio', component: PaginaInicioComponent },
  { path: 'Compras', component: ComprasComponent },
  { path: 'Ventas', component: VentasComponent },
  { path: 'Inventario', component: InventarioComponent },
  { path: 'Proveedores', component: ProveedoresComponent },
  { path: 'Informes', component: InformesComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
