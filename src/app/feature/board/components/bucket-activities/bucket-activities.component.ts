import {Component, Input} from '@angular/core';
import {IBucket} from "../../models/interfaces";

@Component({
  selector: 'app-bucket',
  template: `
    <div class="container-row">
      <h2>{{bucket!.name}}</h2>
      <app-Drop [activities]="bucket!.activities"></app-Drop>
    </div>
  `,
  styles: [
  ]
})
export class BucketActivitiesComponent {

  @Input() bucket?: IBucket;

}
