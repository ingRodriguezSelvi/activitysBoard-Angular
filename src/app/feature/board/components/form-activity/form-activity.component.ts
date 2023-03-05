import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IActivity} from "../../models/interfaces";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivitiesService} from "../../services/activities.service";

@Component({
  selector: 'app-form-activity',
  template:
    `
      <form action="" (ngSubmit)="save()" fxLayout="column" [formGroup]="formActivity">
        <mat-form-field fxFlex="100" appearance="outline">
          <mat-label>Nombre de la actividad</mat-label>
          <input matInput formControlName="title">
        </mat-form-field>
        <mat-form-field fxFlex="100" appearance="outline">
          <mat-label>Tipo</mat-label>
          <input matInput formControlName="type">
        </mat-form-field>
        <div fxFlex fxLayout="row" fxLayoutGap="12px">
          <mat-form-field fxFlex="50" appearance="outline">
            <input matInput [ngxMatDatetimePicker]="picker_one" placeholder="Choose a date" formControlName="startDate">
            <mat-datepicker-toggle matSuffix [for]="$any(picker_one)"></mat-datepicker-toggle>
            <ngx-mat-datetime-picker #picker_one>
            </ngx-mat-datetime-picker>
          </mat-form-field>
          <mat-form-field fxFlex="50" appearance="outline">
            <input matInput [ngxMatDatetimePicker]="picker_two" placeholder="Choose a date" formControlName="endDate">
            <mat-datepicker-toggle matSuffix [for]="$any(picker_two)"></mat-datepicker-toggle>
            <ngx-mat-datetime-picker #picker_two>
            </ngx-mat-datetime-picker>
          </mat-form-field>
        </div>
        <mat-form-field fxFlex="100" appearance="outline">
          <mat-label>Icon</mat-label>
          <input matInput formControlName="icon">
        </mat-form-field>
        <mat-form-field fxFlex="100" appearance="outline">
          <mat-label>Estado</mat-label>
          <input matInput formControlName="status">
        </mat-form-field>
        <div align="end">
          <button mat-button>Cancelar</button>
          <button mat-raised-button color="primary" type="submit"
                  cdkFocusInitial>{{activity ? 'Editar' : 'Crear actividad'}}</button>
        </div>
      </form>
    `,
  styles: [
    `
      .mat-form-field-appearance-outline .mat-form-field-outline-start,
      .mat-form-field-appearance-outline .mat-form-field-outline-end {
        border: 0.8px solid $ color-buttons-secondary-solid-enable !important;
      }
    `
  ]
})
export class FormActivityComponent implements OnInit {

  constructor(private fb: FormBuilder, private activitiesService: ActivitiesService) {
  }

  @Input() activity?: IActivity;

  ngOnInit(): void {
    if (this.activity) {
      this.formActivity.patchValue(this.activity);
    }
  }


  formActivity: FormGroup = this.fb.group({
    activityId: [null],
    title: [, [Validators.required, Validators.minLength(3)]],
    type: [, [Validators.required]],
    startDate: [, [Validators.required]],
    endDate: [, [Validators.required]],
    icon: [, [Validators.required]],
    status: [, [Validators.required]],
  });


  validateInput(input: string) {
    return this.formActivity.controls[input].errors && this.formActivity.controls[input].touched;
  }

  save() {
    if (this.formActivity.invalid) {
      this.formActivity.markAllAsTouched();
      return;
    }
    this.activitiesService.saveActivity(this.formActivity.value);
  }

}
