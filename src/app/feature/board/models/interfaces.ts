export interface IActivity {
  activityId?: number;
  title?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  icon?: string;
  status?: string;
}

export interface IBucket {
  name: string;
  activities: IActivity[];
}
