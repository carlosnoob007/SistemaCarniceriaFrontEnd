import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariablesUso } from './modelos/VariablesUso';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarCabecera = false;
  mostrarPie = false;
  
}
