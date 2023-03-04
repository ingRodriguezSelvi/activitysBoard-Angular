import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {BoarRoutingModule} from "./board-routing.module";

import {BucketActivitiesComponent} from "./components/bucket-activities/bucket-activities.component";
import {ActivitiesComponent} from "./components/activities/activities.component";
import {FlexModule} from "@angular/flex-layout";

import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        BoardComponent,
        ActivitiesComponent,
        BucketActivitiesComponent
    ],
    exports: [
        BoardComponent
    ],
  imports: [
    CommonModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    BoarRoutingModule,
    FlexModule,
    MatCardModule
  ]
})
export class BoardModule { }
