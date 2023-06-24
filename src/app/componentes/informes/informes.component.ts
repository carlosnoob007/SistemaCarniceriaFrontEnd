import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {
  filtro: string = '';
  productos: string[] = ['Producto 1', 'Producto 2', 'Producto 3'];
  proveedores: string[] = ['Proveedor 1', 'Proveedor 2', 'Proveedor 3'];
  productosSeleccionados: string[] = [];
  proveedoresSeleccionados: string[] = [];
  informeUrl: string = 'https://example.com/ruta-al-informe.pdf';
  informeModal!: ElementRef;

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarCabecera = true;
    this.appComponent.mostrarPie = true;
  }

  informes: any[] = [
    { nombre: 'Informe 1', fecha: '25/01/2023', tipo: 'Proveedores', url: 'https://example.com/informe1.pdf' },
    { nombre: 'Informe 2', fecha: '25/01/2023', tipo: 'Productos', url: 'https://example.com/informe2.pdf' },
    { nombre: 'Informe 3', fecha: '30/05/2023', tipo: 'Proveedores', url: 'https://example.com/informe3.pdf' },
    { nombre: 'Informe 4', fecha: '25/01/2023', tipo: 'Productos', url: 'https://example.com/informe4.pdf' },
    { nombre: 'Informe 5', fecha: '25/01/2023', tipo: 'Compras', url: 'https://example.com/informe5.pdf' },
    { nombre: 'Informe 6', fecha: '25/01/2023', tipo: 'Ventas', url: 'https://example.com/informe6.pdf' },
    { nombre: 'Informe 7', fecha: '13/06/2023', tipo: 'Proveedores', url: 'https://example.com/informe7.pdf' },
    { nombre: 'Informe 8', fecha: '25/01/2023', tipo: 'Inventario', url: 'https://example.com/informe8.pdf' },
  ];

  generarInforme() {
    // Lógica para generar el informe en función de los filtros seleccionados

    // Abrir el modal con el informe PDF
    const modal = this.informeModal.nativeElement;
    modal.classList.add('show');
    modal.style.display = 'block';
  }

  abrirInforme(url: string) {
    this.informeUrl = url;
    const modal = this.informeModal.nativeElement;
    modal.classList.add('show');
    modal.style.display = 'block';
  }
}
