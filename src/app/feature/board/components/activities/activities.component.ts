import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {IActivity} from "../../models/interfaces";

@Component({
  selector: 'app-Drop',
  template: `
      <div
              cdkDropList
              [cdkDropListData]="activities"
              class="list-task"
              (cdkDropListDropped)="drop($event)">
          <div class="box" *ngFor="let item of activities" cdkDrag fxLayout="row wrap" fxLayoutGap="12px">
              <img [src]="item.icon" width="50" alt="icon">
              <h1 fxFlex>{{item.title}}</h1>
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
            cursor: move;
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
