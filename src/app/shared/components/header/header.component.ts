import {Component, EventEmitter, Output} from '@angular/core';
import {ModalActivityComponent} from "../../../feature/board/components/modal-activity/modal-activity.component";
import {MatDialog} from "@angular/material/dialog";
import {IActivity} from "../../../feature/board/models/interfaces";

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar fxLayout.lt-md="column" fxLayout="row" fxLayoutAlign="space-between center">
      <button mat-icon-button (click)="openSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span fxFlex>Itinerario</span>
      <button  mat-raised-button color="primary" (click)="openModal()"><mat-icon>add_circle</mat-icon> Agregar actividad</button>
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

  constructor(public dialog: MatDialog) {
  }

  @Output() toggleSidenav:EventEmitter<any> = new EventEmitter<any>();

  openSidenav(){
    this.toggleSidenav.emit();
  }

  openModal(): void {
    this.dialog.open(ModalActivityComponent, {
      width: '500px',
      position: {
        top: '60px',
        right: '0px'
      }
    });
  }
}
