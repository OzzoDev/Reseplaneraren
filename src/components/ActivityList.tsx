import { Activity } from "../types/types";
import { sortActivities } from "../utils/utils";
import ActivityItem from "./ActivityItem";

interface Props {
  activities: Activity[];
  sortOrder: number;
  isSearchSuccessful: boolean;
  setActivities: (activities: Activity[]) => void;
}

/**
 * A component that displays a list of activities.
 * Allows for deleting and editing activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The array of original activities.
 * @param {Activity[]} props.isSearchSuccessful - A check to see if there is any matching activities to search qurey.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered list of activities.
 *
 * @example
 * <ActivityList
 *   activities={activities}
 *   isSearchSuccessful={isSearchSuccessful}
 *   setActivities={setActivities}
 * />
 */

export default function ActivityList({
  activities,
  sortOrder,
  isSearchSuccessful,
  setActivities,
}: Props) {
  const handleDeleteActivity = (activity: Activity) => {
    const updatedActivities = activities
      .filter((act) => {
        return act.id !== activity.id;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setActivities(updatedActivities);
  };

  const handleEditActivity = (activity: Activity) => {
    const updatedActivities = activities.map((act) => {
      if (act.id === activity.id) {
        return activity;
      }
      return act;
    });

    const sortedActivities = sortActivities(sortOrder, updatedActivities);

    setActivities(sortedActivities);
  };

  const noActivities = activities.length === 0;

  if (noActivities) {
    return <h2 className="text-5xl text-white m-auto">No activites!</h2>;
  }

  if (!isSearchSuccessful) {
    return <h2 className="text-5xl text-white m-auto">No matching activites!</h2>;
  }

  const filteredActivities = activities.filter((activity) => activity.isVisible);

  return (
    <ul className="m-auto mt-[200px] w-full text-white bg-gray-700 bg-opacity-100">
      {filteredActivities.map((activity) => {
        return (
          <ActivityItem
            key={activity.id}
            activity={activity}
            deleteActivity={handleDeleteActivity}
            editActivity={handleEditActivity}
          />
        );
      })}
    </ul>
  );
}
