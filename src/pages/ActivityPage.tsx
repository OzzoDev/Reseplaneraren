import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import { Activity } from "../types/types";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A page component that displays a list of activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The current array of activities.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered activity page.
 *
 * @example
 * <ActivityPage
 *   activities={activities}
 *   setActivities={setActivities}
 * />
 */

export default function ActivityPage({ activities, setActivities }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <ActivityList activities={activities} setActivities={setActivities} />
      <PageLink path="/" text="Add activitiy" />
    </div>
  );
}
