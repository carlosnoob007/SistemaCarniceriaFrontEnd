import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Proveedores } from 'src/app/modelos/Proveedores';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {


  id = 0;
  nombreProveedor = "";
  direccion = "";
  telefono = "";
  correoElectronico = "";
  listProveedores: Proveedores[] = [];

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }



  agregarProveedor():void {
    const proveedores: Proveedores = {

      id: this.id,
      nombreProveedor: this.nombreProveedor,
      direccion: this.direccion,
      telefono: this.telefono,
      correoElectronico: this.correoElectronico
    }

    
    this.listProveedores.push(proveedores);

    this.id = 0;
    this.nombreProveedor = "";
    this.direccion = "";
    this.telefono = "";
    this.correoElectronico= "";

  }

}
