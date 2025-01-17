import { Activity } from "../types/types";

export function generateID(activities: Activity[]): number {
  if (activities.length === 0) {
    return 0;
  } else {
    return Math.max(...activities.map((activity) => activity.id)) + 1;
  }
}
