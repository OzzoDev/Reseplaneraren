import { Activity, Priority, Trip } from "../types/types";
import { currentDate } from "../utils/utils";

export const TRIPS_KEY = "trips"
export const ACTIVITES_KEY = "activites";
export const SORT_ORDER = "sortOrder";

export const MAX_PAGE_ITEMS = 3;

export const priorityMap: Priority[] = [
  { prio: 0, color: "green" },
  { prio: 1, color: "blue" },
  { prio: 2, color: "red" },
];

export const defaultActivity: Activity = {
  activity: "",
  place: "",
  date: currentDate(),
  id: -1,
  isVisible: true,
  priority: priorityMap[0],
};

export const defaultTrip:Trip = {
  id:-1,
  to:"",
  from:"",
  date:"", 
  activities:[]
}
