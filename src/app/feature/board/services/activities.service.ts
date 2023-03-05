import {Injectable} from '@angular/core';
import {IActivity, IBucket} from "../models/interfaces";
import {Observable, of} from "rxjs";
import {dataMock} from "../mock/dataMock";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  buckets: IBucket[] = dataMock;

  getBuckets(): Observable<IBucket[]> {
    this.sortBuckets();
    this.buckets.forEach(bucket => bucket.activities!.forEach(activity => this.updateActivity(activity)))
    return of(this.buckets);
  }

  deleteActivity(activityIn: IActivity) {
    this.deleteCurrentBucket(activityIn);
    this.sortBuckets();
  }
  deleteBucket(bucketIn: IBucket) {
   this.buckets.splice(this.buckets.findIndex(bucket => bucket.bucketId === bucketIn.bucketId), 1);
  }
  saveActivity(activityIn: IActivity) {
    if (activityIn.activityId) {
      this.updateActivity(activityIn);
    } else {
      this.createActivity(activityIn);
    }
    this.sortBuckets();
  }

  sortBuckets() {
    this.buckets.sort((bucketOne, bucketTwo) => {
      if (!bucketOne.date && !bucketTwo.date) {
        return 0;
      } else if (!bucketOne.date) {
        return -1;
      } else if (!bucketTwo.date) {
        return 1;
      } else {
        return bucketOne.date.getTime() - bucketTwo.date.getTime();
      }
    });
  }

  private createActivity(activityIn: IActivity) {
    //Setear el id de la actividad simulando un autoincremental del backend
    activityIn.activityId = Math.max(...this.buckets.map(bucket => Math.max(...bucket.activities!.map(activity => activity.activityId)))) + 1;
    if (!activityIn.startDate) {
      this.buckets[0].activities!.push(activityIn);
      return;
    }
    const bucket = this.buckets.find(bucket => bucket.date?.toDateString() === activityIn.startDate!.toDateString());
    if (bucket) {
      bucket.activities!.push(activityIn);
    } else {
      this.buckets.push({
        bucketId: this.buckets.length + 1,
        date: activityIn.startDate!,
        activities: [activityIn]
      });
    }
  }
  private updateActivity(activityIn: IActivity) {
    this.deleteCurrentBucket(activityIn);
    this.createActivity(activityIn);
  }
  private deleteCurrentBucket(activityIn: IActivity) {
    // Encontrar el bucket actual de la actividad
    const currentBucket = this.buckets.find(bucket => bucket.activities!.find(activity => activity.activityId === activityIn.activityId));

    if (!currentBucket) {
      throw new Error(`No se pudo encontrar el bucket actual de la actividad con el título "${activityIn.title}"`);
    }
    // Eliminar la actividad del bucket actual
    currentBucket.activities = currentBucket.activities!.filter(activity => activity.activityId !== activityIn.activityId);
  }
}
