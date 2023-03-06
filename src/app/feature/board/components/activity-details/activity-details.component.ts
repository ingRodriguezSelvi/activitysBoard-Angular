import {Component, Input} from '@angular/core';
import {IActivity} from "../../models/interfaces";
import {Types} from "../../models/enums";
import {ModalService} from "../../services/modal.service";
import {ActivitiesService} from "../../services/activities.service";

@Component({
  selector: 'app-activity-details',
  template:
    `
        <div class="box" fxLayout="row wrap" fxLayoutGap="12px">
            <div fxFlex="100" fxLayout.lt-sm="column" fxLayout="row wrap">
                <img [src]="getIconForType(activity.type)" alt="icon" fxFlex="30">
                <h2 fxFlex="70">
                    {{activity.title}}
                    <mat-icon class="trash" color="warn" (click)="delete(activity)">delete_forever</mat-icon>
                </h2>
            </div>
            <div fxFlex="100" fxLayout="row wrap">
                <div fxFlex="30"></div>
                <p>{{activity.startDate | date:'HH:mm'}} - {{activity.endDate | date:'HH:mm'}}</p>
            </div>
            <mat-chip-option fxFlex="100" selected color="primary"
                             (click)="openModal(activity)">{{activity.status}}
            </mat-chip-option>
        </div>
    `,
  styles: [`
    .box {
      padding: 20px 10px;
      border-bottom: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      background: white;
      font-size: 14px;
    }

    .box:last-child {
      border: none;
    }
    mat-chip-option {
      cursor: pointer;
    }
    mat-icon{
      font-size: medium;
      cursor: pointer;
    }
  `]
})
export class ActivityDetailsComponent {

  @Input() activity!: IActivity;

  constructor( private readonly modalService:ModalService,private readonly activitiesService: ActivitiesService ) { }

  openModal(activity:IActivity): void {
    this.modalService.openModal(activity);
  }

  getIconForType(type: Types): string {
    switch (type) {
      case Types.Food:
        return 'assets/icon/foodIcon.png';
      case Types.Study:
        return 'assets/icon/studyIcon.png';
      case Types.JOURNEY:
        return  'assets/icon/journeyIcon.png';
      case Types.Work:
        return 'assets/icon/workIcon.png';
      case Types.Sport:
        return 'assets/icon/sportIcon.png';
      default:
        return 'assets/icon/otherIcon.png';
    }
  }

  delete(activity:IActivity): void {
    this.activitiesService.deleteActivity(activity);
  }
}
