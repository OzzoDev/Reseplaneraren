export type Activity = {
  id: number;
  activity: string;
  place: string;
  date: string;
  isVisible: boolean;
  priority: Priority;
};

export type Priority = {
  prio: number;
  color: string;
};
