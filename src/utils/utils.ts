import { Activity } from "../types/types";

export function generateID(activities: Activity[]): number {
  if (activities.length === 0) {
    return 0;
  } else {
    return activities.sort((a, b) => a.id - b.id)[0].id + 1;
  }
}
