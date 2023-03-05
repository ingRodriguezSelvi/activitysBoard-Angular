import {Status, Types} from "./enums";

export interface IActivity {
  activityId: number;
  title: string;
  type: Types;
  startDate?: Date;
  endDate?: Date;
  status: Status;
}

export interface IBucket {

  bucketId: number;
  date?: Date;
  activities?: IActivity[];
}
