import { MAX_PAGE_ITEMS } from "../constants/constants";
import { Activity, Trip } from "../types/types";

export function generateID(array: Activity[]|Trip[]): number {
  if (array.length === 0) {
    return 0;
  } else {
    return Math.max(...array.map((item) => item.id)) + 1;
  }
}

export function searchSuccess(activities: Activity[]): boolean {
  return activities.some((activitiy) => activitiy.isVisible);
}

export function isNewActivity(activitiy: Activity, activities: Activity[]): boolean {
  return !activities.some((act) => act.activity.toLowerCase() === activitiy.activity.toLowerCase());
}

export function isNewTrip(trip: Trip, trips: Trip[]): boolean {
  return !trips.some((t) => t.from.toLowerCase() === trip.from.toLowerCase()&&t.to.toLowerCase() === trip.to.toLowerCase());
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

export function calcPageCount(activities: Activity[], maxItems: number): number {
  const visibleActivities = [...activities].filter((activity) => activity.isVisible);
  return Math.ceil(visibleActivities.length / maxItems);
}

export function showActivity(index: number, page: number): boolean {
  return index >= (page - 1) * MAX_PAGE_ITEMS && index < page * MAX_PAGE_ITEMS;
}
