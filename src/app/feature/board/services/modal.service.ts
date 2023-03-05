import { Injectable } from '@angular/core';
import {ModalActivityComponent} from "../components/modal-activity/modal-activity.component";
import {MatDialog} from "@angular/material/dialog";
import {IActivity} from "../models/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor( public readonly dialog: MatDialog,) { }

  openModal(activity?:IActivity): void {
    this.dialog.open(ModalActivityComponent, {
      data: activity,
      width: '500px',
      minHeight: 'calc(110vh - 90px)',
      height : 'auto',
      position: {
        top: '0',
        right: '0px'
      }
    });
  }
}
