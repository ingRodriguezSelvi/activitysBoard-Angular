import {Status, Types} from "./enums";

export interface IActivity {
  activityId: number;
  title: string;
  type: Types;
  startDate?: Date;
  endDate?: Date;
  icon?: string;
  status?: Status;
}

export interface IBucket {
  date?: Date;
  activities: IActivity[];
}