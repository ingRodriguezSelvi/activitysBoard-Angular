import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {BoarRoutingModule} from "./board-routing.module";

import {BucketActivitiesComponent} from "./components/bucket-activities/bucket-activities.component";
import {ActivitiesComponent} from "./components/activities/activities.component";
import {FlexModule} from "@angular/flex-layout";

import { FormActivityComponent } from './components/form-activity/form-activity.component';
import { ModalActivityComponent } from './components/modal-activity/modal-activity.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import {MaterialModule} from "../../material/material.module";


@NgModule({
    declarations: [
        BoardComponent,
        ActivitiesComponent,
        BucketActivitiesComponent,
        FormActivityComponent,
        ModalActivityComponent
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
    MaterialModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  ]
})
export class BoardModule { }
