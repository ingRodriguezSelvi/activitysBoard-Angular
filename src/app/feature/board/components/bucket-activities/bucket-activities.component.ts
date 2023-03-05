import {Component, Input} from '@angular/core';
import {IBucket} from "../../models/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {FormActivityComponent} from "../form-activity/form-activity.component";
import {ModalActivityComponent} from "../modal-activity/modal-activity.component";
import {ModalService} from "../../services/modal.service";
import {ActivitiesService} from "../../services/activities.service";

@Component({
  selector: 'app-bucket',
  template: `
      <div class="container-row">
          <h2 *ngIf="bucket!.date">{{bucket!.date | date:'mediumDate'}}
            <mat-icon class="trash" (click)="delete(bucket!)" color="warn">delete_forever</mat-icon>
          </h2>
          <h2 *ngIf="!bucket!.date">
              <mat-icon>inbox</mat-icon>
              Sin fecha asignada
          </h2>
          <app-activities [activities]="bucket!.activities!"></app-activities>
          <a (click)="openModal()">+ Nueva</a>
      </div>
  `,
  styles: [
    `
      a{
        color: #5e6c84;
        cursor: pointer;
      }
      .trash{
        cursor: pointer;
      }

    `
  ]
})
export class BucketActivitiesComponent {

  constructor(private readonly modalService:ModalService, private readonly activitiesService: ActivitiesService) {
  }

  @Input() bucket?: IBucket;

  openModal(): void {
    this.modalService.openModal();
  }

  delete(bucket: IBucket): void {
    this.activitiesService.deleteBucket(bucket);
  }

}
