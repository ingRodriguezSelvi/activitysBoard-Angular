import {Injectable} from '@angular/core';
import {IActivity, IBucket} from "../models/interfaces";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Status, Types} from "../models/enums";
import {dataMock} from "../mock/dataMock";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  buckets: IBucket[] = dataMock;

  getBuckets(): Observable<IBucket[]> {
    this.buckets.forEach(bucket => bucket.activities.forEach(activity => this.relocateActivityForDateBucket(activity)))
    return of(this.buckets);
  }
  saveActivity(activityIn: IActivity) {
    debugger;
    if (activityIn.activityId) {
      this.updateActivity(activityIn);
    } else {
      this.createActivity(activityIn);
    }
  }

  private createActivity(activityIn: IActivity) {
    const bucket = this.buckets.find(b => b.date?.toDateString() === activityIn.startDate!.toDateString());
    if (bucket) {
      bucket.activities.push(activityIn);
    } else {
      this.buckets.push({
        date: activityIn.startDate!,
        activities: [activityIn]
      });
    }
  }

  private updateActivity(activityIn: IActivity) {
    this.deleteCurrentBucket(activityIn);
    this.createActivity(activityIn);
  }

  relocateActivityForDateBucket(activityIn: IActivity) {
    this.deleteCurrentBucket(activityIn);

    //En caso de que no tenga fecha, se asigna al bucket sin fecha (bucket 0)
    if (!activityIn.startDate) {
      this.buckets[0].activities.push(activityIn);
      return;
    }

    const bucket = this.buckets.find(b => b.date?.toDateString() === activityIn.startDate!.toDateString());
    if (bucket) {
      bucket.activities.push(activityIn);
    } else {
      this.buckets.push({
        date: activityIn.startDate!,
        activities: [activityIn]
      });
    }
  }

  private deleteCurrentBucket(activityIn: IActivity) {
    // Encontrar el bucket actual de la actividad
    const currentBucket = this.buckets.find(bucket => bucket.activities.find(activity => activity.activityId === activityIn.activityId));

    if (!currentBucket) {
      throw new Error(`No se pudo encontrar el bucket actual de la actividad con el título "${activityIn.title}"`);
    }
    // Eliminar la actividad del bucket actual
    currentBucket.activities = currentBucket.activities.filter(activity => activity.activityId !== activityIn.activityId);
  }
}
