import { Activity } from "../types/types";
import { ACTIVITES_KEY, SORT_ORDER } from "../constants/constants";
import useLocalStorage from "../hooks/useLocalStorage";
import TripForm from "../components/trip/TripForm";

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
 *   setActivities={setActivities}rfc
 * />
 */

// export default function StartPage({ activities, sortOrder, setActivities }: Props) {
export default function StartPage() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(
    ACTIVITES_KEY,
    []
  );
  const [sortOrder, setSortOrder] = useLocalStorage<number>(SORT_ORDER, 0);

  return (
    <TripForm />
    // <div className="grow flex flex-col">
    //   <div className="flex items-center space-x-7 pl-2 py-3 w-full">
    //     <PageLink path="/activities" text="See my activites" />
    //     <ActivityCount activites={activities} />
    //   </div>
    //   <ActivityForm activities={activities} setActivities={setActivities} sortOrder={sortOrder} />
    // </div>
  );
}
