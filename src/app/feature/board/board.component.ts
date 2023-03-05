import {Component, OnInit} from '@angular/core';
import {IBucket} from "./models/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ModalActivityComponent} from "./components/modal-activity/modal-activity.component";
import {ActivitiesService} from "./services/activities.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-board',
  template: `
    <ng-container *ngIf="buckets.length > 0; else empty;">
      <div cdkDropListGroup fxLayout="row wrap" fxLayout.lt-md="column" fxLayoutGap="12px">
        <app-bucket *ngFor="let todo of buckets"
                    fxFlex [bucket]="todo">

        </app-bucket>
      </div>
    </ng-container>
    <ng-template #empty>
      <div class="empty">
        <mat-icon>inbox</mat-icon>
        <p (click)="openModal()">+ Agrega una nueva tarea</p>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .empty {
        color: #5e6c84;
        cursor: pointer;
      }
    `
  ]
})
export class BoardComponent implements OnInit{


  public buckets:IBucket[] = [];


  constructor( public readonly dialog: MatDialog, public readonly activitiesService: ActivitiesService ) {

  }
  ngOnInit() {
    this.activitiesService.getBuckets().subscribe(
      (buckets:IBucket[]) => {
        this.buckets = buckets;
        localStorage.setItem('buckets', JSON.stringify(buckets));
      }
    );
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
