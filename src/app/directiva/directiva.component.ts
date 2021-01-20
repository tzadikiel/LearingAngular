import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['Typescript', 'JavaScript', 'Java SE', 'C#', 'Pascal'];
  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true) ? false : true;
  }
}
