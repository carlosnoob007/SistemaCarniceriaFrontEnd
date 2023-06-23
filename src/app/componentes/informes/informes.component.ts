import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }

  
}
