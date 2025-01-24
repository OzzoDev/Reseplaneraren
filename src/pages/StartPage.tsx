import ActivityForm from "../components/ActivityForm";
import { Activity } from "../types/types";
import PageLink from "../components/PageLink";
import ActivityCount from "../components/ActivityCount";

interface Props {
  activities: Activity[];
  sortOrder: number;
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

export default function StartPage({ activities, sortOrder, setActivities }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-slate-200 to-sky-900">
      <div className="flex items-center space-x-7 pl-2 py-3 w-full">
        <PageLink path="/activities" text="See my activites" />
        <ActivityCount activites={activities} />
      </div>
      <ActivityForm activities={activities} setActivities={setActivities} sortOrder={sortOrder} />
    </div>
  );
}
