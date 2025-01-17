import ActivityForm from "../components/ActivityForm";
import { Activity } from "../types/types";
import PageLink from "../components/PageLink";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A page component that allows users to add new activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The current array of activities.
 * @param {(activities: Activity[]) => void} props.setActivities - Function to update the activities.
 *
 * @returns {JSX.Element} The rendered start page with an activity form.
 *
 * @example
 * <StartPage
 *   activities={activities}
 *   setActivities={setActivities}
 * />
 */

export default function StartPage({ activities, setActivities }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <ActivityForm activities={activities} setActivities={setActivities} />
      <PageLink path="/activities" />
    </div>
  );
}
