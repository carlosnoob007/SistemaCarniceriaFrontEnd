import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'PaginaInicio', component: PaginaInicioComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
