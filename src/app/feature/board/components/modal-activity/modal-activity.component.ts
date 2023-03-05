import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IActivity} from "../../models/interfaces";

@Component({
  selector: 'app-modal-activity',
  template:
    `
      <div class="header-modal">
        <button mat-button><mat-icon>navigate_next</mat-icon></button>
        <h2>{{data ? 'Editar actividad' : 'Crear actividad'}}</h2>
      </div>
      <div mat-dialog-content>
          <app-form-activity [activity]="data"></app-form-activity>
      </div>
    `,
  styles: [
    `
      .header-modal{
        display: flex;
        padding: 10px;
        background: #3f51b5;
        color: white;
      }
      button mat-icon{
        color: white;
      }
    `
  ]
})
export class ModalActivityComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IActivity,
  ) {}

}
