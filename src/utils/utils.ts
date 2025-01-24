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

export function sortActivities(sortOption: number, activities: Activity[]) {
  let updatedActivities = [...activities];

  switch (sortOption) {
    case 0:
      updatedActivities.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      break;
    case 1:
      updatedActivities.sort((a, b) => a.activity.localeCompare(b.activity));
      break;
    case 2:
      updatedActivities.sort((a, b) => a.place.localeCompare(b.place));
      break;
    case 3:
      updatedActivities.sort((a, b) => b.priority.prio - a.priority.prio);
      break;
    case 4:
      updatedActivities.sort((a, b) => a.priority.prio - b.priority.prio);
      break;
  }

  return updatedActivities;
}

export function currentDate(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}
