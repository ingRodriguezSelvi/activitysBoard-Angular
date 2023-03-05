import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MaterialModule} from "../material/material.module";
import {FlexModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
