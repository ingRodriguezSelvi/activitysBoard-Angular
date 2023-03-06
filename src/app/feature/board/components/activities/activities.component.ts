import {Component,  Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {IActivity, IBucket} from "../../models/interfaces";

@Component({
  selector: 'app-activities',
  template: `
    <div
      cdkDropList
      [cdkDropListData]="activities"
      class="list-task"
      (cdkDropListDropped)="drop($event)">
      <div *ngFor="let activity of activities" cdkDrag>
        <app-activity-details [activity]="activity"></app-activity-details>
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

      .list-task.cdk-drop-list-dragging .box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class ActivitiesComponent {
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
}
