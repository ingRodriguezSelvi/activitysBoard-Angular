import {IBucket} from "../models/interfaces";
import {Status, Types} from "../models/enums";

export const dataMock: IBucket[] =  [
  {
    bucketId: 1,
    activities: [
      {
        activityId: 1,
        title: 'Terminar el curso de Angular',
        type: Types.Work,
        status: Status.TODO
      }]
  },
  {
    bucketId: 2,
    date: new Date('2022-05-01'),
    activities: [
      {
        activityId: 2,
        title: 'Hacer cena',
        type: Types.Food,
        startDate: new Date('2022-05-01'),
        status: Status.TODO
      }]
  },
  {
    bucketId: 3,
    date: new Date('2022-05-02'),
    activities: [
      {
        activityId: 3,
        title: 'Viajar a bogota',
        type: Types.JOURNEY,
        startDate: new Date('2022-05-02'),
        status: Status.IN_PROGRESS
      }]
  },
  {
    bucketId: 4,
    date: new Date('2022-05-03'),
    activities: [
      {
        activityId: 4,
        title: 'Comprar en Zara',
        type: Types.Study,
        startDate: new Date('2022-05-03'),
        endDate: new Date('2022-05-03'),
        status: Status.DONE,
      }
    ]
  }
]
