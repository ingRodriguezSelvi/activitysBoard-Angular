import {Component, OnInit} from '@angular/core';
import {IBucket} from "./models/interfaces";

@Component({
  selector: 'app-board',
  template: `
    <div cdkDropListGroup fxLayout="row wrap" fxLayoutGap="12px">
      <app-bucket *ngFor="let todo of rows"
        fxFlex [bucket]="todo"></app-bucket>
      <mat-card></mat-card>
    </div>
  `,
  styles: [
    `
      .container-row {
        width: 400px;
        max-width: 100%;
        margin: 0 25px 25px 0;
        display: inline-block;
        vertical-align: top;
      }
    `
  ]
})
export class BoardComponent implements OnInit{

  constructor() {

  }
  ngOnInit() {
    this.rows.push(this.todo);
    this.rows.push(this.inProgress);
    this.rows.push(this.done);
  }

  rows:IBucket[]= [];

  todo: IBucket = {
    name: 'To do',
    activities: [
      {
        title: 'Hacer cena',
        type: 'task',
        startDate: new Date(),
        endDate: new Date(),
        icon:'https://cdn-icons-png.flaticon.com/512/242/242452.png',
        status: 'To do'
      }]

  }

  inProgress: IBucket = {
    name: 'In progress',
    activities: [
      {
        title: 'Viajar a bogota',
        type: 'task',
        startDate: new Date(),
        endDate: new Date(),
        icon:'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        status: 'In progress'
      }]
  }

  done: IBucket = {
    name: 'Done',
    activities: [
      {
        title: 'Comprar en Zara',
        type: 'task',
        startDate: new Date(),
        endDate: new Date(),
        status: 'Done',
        icon: 'https://www.pngkey.com/png/full/292-2926301_icono-ropa-png-location-orange-icon-png.png'
      }
    ]
  }
}
