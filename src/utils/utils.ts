import { Activity } from "../types/types";

export function generateID(activities: Activity[]): number {
  if (activities.length === 0) {
    return 0;
  } else {
    return Math.max(...activities.map((activity) => activity.id)) + 1;
  }
}

export function searchSuccess(activities: Activity[]): boolean {
  return activities.some((activitiy) => activitiy.isVisible);
}

export function isNewActivity(activitiy: Activity, activities: Activity[]): boolean {
  return !activities.some((act) => act.activity.toLowerCase() === activitiy.activity.toLowerCase());
}
