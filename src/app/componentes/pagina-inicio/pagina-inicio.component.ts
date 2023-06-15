import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VariablesUso } from 'src/app/modelos/VariablesUso';

@Component({
  selector: 'componente-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }

}
