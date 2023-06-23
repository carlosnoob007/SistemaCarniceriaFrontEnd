import { Title } from '@angular/platform-browser';
import { Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'componente-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private appComponent: AppComponent,private titleService: Title) {}
  
  ngOnInit() {
    this.appComponent.mostrarCabecera = false;
    this.appComponent.mostrarPie = false;
    this.titleService.setTitle('Iniciar Sesión');
  }
}
