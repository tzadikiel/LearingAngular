import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de productos';
  p1: string = 'Frutas';
  p2: string = 'Comida';
  p3: string = 'Dulces';
}
