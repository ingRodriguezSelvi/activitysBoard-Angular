import {Component,  Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {IActivity, IBucket} from "../../models/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ModalActivityComponent} from "../modal-activity/modal-activity.component";
import {Types} from "../../models/enums";
import {ModalService} from "../../services/modal.service";
import {ActivitiesService} from "../../services/activities.service";


@Component({
  selector: 'app-activities',
  template: `
      <div
              cdkDropList
              [cdkDropListData]="activities"
              class="list-task"
              (cdkDropListDropped)="drop($event)">
          <div class="box" *ngFor="let item of activities" cdkDrag fxLayout="row wrap" fxLayoutGap="12px">
              <div fxFlex="100" fxLayout.lt-sm="column" fxLayout="row wrap">
                <img [src]="getIconForType(item.type)" alt="icon" fxFlex="30">
                <h2  fxFlex="70">{{item.title}}</h2>
              </div>
              <div fxFlex="100" fxLayout="row wrap">
                <div fxFlex="30"></div>
                <p>{{item.startDate | date:'HH:mm'}} - {{item.endDate | date:'HH:mm'}}</p>
              </div>
              <mat-chip-option fxFlex="100" selected disabled color="primary">{{item.status}}</mat-chip-option>
              <div fxFlex="100" fxLayout="row wrap">
                <button fxFlex="50" mat-icon-button (click)="openModal(item)">
                  <mat-icon>edit</mat-icon>
                </button>
                <button fxFlex="50" mat-icon-button (click)="delete(item)">
                  <mat-icon class="trash"  color="warn">delete_forever</mat-icon>
                </button>
              </div>
          </div>
      </div>
  `,
  styles: [
    `
      .list-task {
        border: solid 1px #ccc;
        min-height: 60px;
        background: white;
        border-radius: 4px;
        overflow: hidden;
        display: block;
      }

      .box {
        padding: 20px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: pointer;
        background: white;
        font-size: 14px;
      }

      .box:last-child {
        border: none;
      }

      .list-task.cdk-drop-list-dragging .box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class ActivitiesComponent {

  constructor(private readonly modalService:ModalService,private readonly activitiesService: ActivitiesService) {
  }

  @Input() activities: IActivity[] = [];

  drop(event: CdkDragDrop<IActivity[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openModal(activity:IActivity): void {
    this.modalService.openModal(activity);
  }

  getIconForType(type: Types): string {
    switch (type) {
      case Types.Food:
        return '../../../../../assets/icon/foodIcon.png';
      case Types.Study:
        return '../../../../../assets/icon/studyIcon.png';
      case Types.JOURNEY:
        return  '../../../../../assets/icon/journeyIcon.png';
      case Types.Work:
        return '../../../../../assets/icon/workIcon.png';
      case Types.Sport:
        return '../../../../../assets/icon/sportIcon.png';
      default:
        return '../../../../../assets/icon/otherIcon.png';
    }
  }

  delete(activity:IActivity): void {
    this.activitiesService.deleteActivity(activity);
  }

}
