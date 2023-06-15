import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'componente-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {


  menuItems = [
    { path: '', label: 'Login' },
  ];

  isClicked = false;

  toggleHeart() {
    this.isClicked = !this.isClicked;
  }

}