import { Activity, Priority } from "../types/types";
import { currentDate } from "../utils/utils";

export const ACTIVITES_KEY = "activites";
export const SORT_ORDER = "sortOrder";

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
