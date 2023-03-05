import {IBucket} from "../models/interfaces";
import {Status, Types} from "../models/enums";

export const dataMock: IBucket[] =  [
  {
    activities: [
      {
        activityId: 1,
        title: 'Hacer cena',
        type: Types.Food,
        icon: 'https://cdn-icons-png.flaticon.com/512/242/242452.png',
        status: Status.TODO
      }]
  },
  {
    date: new Date('2022-05-01'),
    activities: [
      {
        activityId: 2,
        title: 'Hacer cena',
        type: Types.Food,
        startDate: new Date('2022-05-01'),
        icon: 'https://cdn-icons-png.flaticon.com/512/242/242452.png',
        status: Status.TODO
      }]
  },
  {
    date: new Date('2022-05-02'),
    activities: [
      {
        activityId: 3,
        title: 'Viajar a bogota',
        type: Types.JOURNEY,
        startDate: new Date('2022-05-02'),
        icon: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        status: Status.IN_PROGRESS
      }]
  },
  {
    date: new Date('2022-05-03'),
    activities: [
      {
        activityId: 4,
        title: 'Comprar en Zara',
        type: Types.Study,
        startDate: new Date('2022-05-03'),
        endDate: new Date('2022-05-03'),
        status: Status.DONE,
        icon: 'https://www.pngkey.com/png/full/292-2926301_icono-ropa-png-location-orange-icon-png.png'
      }
    ]
  }
]
