import { Activity } from "../types/types";
import ActivityItem from "./ActivityItem";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

export default function ActivityList({ activities, setActivities }: Props) {
  const handleDeleteActivity = (activity: Activity) => {
    const updatedActivities = activities.filter((act) => {
      return act.id !== activity.id;
    });

    setActivities(updatedActivities);
  };

  const handleEditActivity = (activity: Activity) => {
    const updatedActivities = activities.map((act) => {
      if (act.id === activity.id) {
        return activity;
      }
      return act;
    });

    setActivities(updatedActivities);
  };

  return (
    <ul className="activity-list">
      {activities.map((activity) => {
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
