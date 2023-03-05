import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar fxLayout.lt-md="column" fxLayout="row" fxLayoutAlign="space-between center">
      <button mat-icon-button (click)="openSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span fxFlex>Itinerario</span>
      <button  mat-raised-button color="primary"><mat-icon>add_circle</mat-icon> Agregar actividad</button>
    </mat-toolbar>
  `,
  styles: [
    `
      span {
        font-size: 30px;
        font-weight: bold;
        color: #2e4b65;
      }
    `
  ]
})
export class HeaderComponent {
  @Output() toggleSidenav:EventEmitter<any> = new EventEmitter<any>();

  openSidenav(){
    this.toggleSidenav.emit();
  }
}
