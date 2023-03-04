import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MaterialModule} from "../material/material.module";
@NgModule({
  declarations: [
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
