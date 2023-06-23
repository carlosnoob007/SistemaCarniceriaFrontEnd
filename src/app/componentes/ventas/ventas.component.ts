import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }

  productos: string[] = ['Producto 1', 'Producto 2', 'Producto 3'];
  categorias: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  vendedores: string[] = ['Vendedor 1', 'Vendedor 2', 'Vendedor 3'];
  nuevoProducto: string = '';
  nuevaCategoria: string = '';
  nuevoVendedor:string = '';

  guardarCompra() {
    // Lógica para guardar la compra
  }

}
