import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvenido a angular';
  curso:string = 'Curso Sprint con angular 7';
  profesor:string = 'Andres gusman';
}
