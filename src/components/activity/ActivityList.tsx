import { Activity, Trip } from "../../types/types";
import ActivityItem from "./ActivityItem";

interface Props {
  trip: Trip;
  activities: Activity[];
}

export default function ActivityList({ trip, activities }: Props) {
  const noActivities = activities.length === 0;

  if (noActivities) {
    return <h2 className="text-5xl text-white m-auto">No activities!</h2>;
  }

  const filteredActivities = activities.filter((activity) => activity.isVisible);

  if (filteredActivities.length === 0) {
    return <h2 className="text-5xl text-white m-auto">No matching activites!</h2>;
  }

  return (
    <ul className="m-auto mt-[200px] w-full text-white grow">
      {filteredActivities.map((activity) => {
        return <ActivityItem key={activity.id} trip={trip} activity={activity} />;
      })}
    </ul>
  );
}
