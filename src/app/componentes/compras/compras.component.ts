import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'componente-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  
  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }

  
  productos: string[] = ['Producto 1', 'Producto 2', 'Producto 3'];
  categorias: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  proveedores: string[] = ['Proveedor 1', 'Proveedor 2', 'Proveedor 3'];
  nuevoProducto: string = '';
  nuevaCategoria: string = '';
  nuevoProveedor:string = '';

  guardarCompra() {
    // Lógica para guardar la compra
  }
  
}
