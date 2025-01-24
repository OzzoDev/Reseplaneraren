import { useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import Search from "../components/Search";
import { Activity } from "../types/types";
import { searchSuccess } from "../utils/utils";

interface Props {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

/**
 * A page component that displays a list of activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {Activity[]} props.activities - The current array of activities.
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
  const [isSearchSuccessful, setIsSearchSuccessful] = useState<boolean>(searchSuccess(activities));

  useEffect(() => {
    setIsSearchSuccessful(searchSuccess(activities));
  }, [activities]);

  const handleSearchActivites = (searchQurey: string) => {
    const updatedActivities: Activity[] = activities.map((activity) => {
      const normalizedActivity = activity.activity.toLowerCase();
      if (normalizedActivity.includes(searchQurey)) {
        activity.isVisible = true;
      } else {
        activity.isVisible = false;
      }
      return activity;
    });

    setActivities(updatedActivities);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-slate-200 to-sky-900">
      <Search onChange={handleSearchActivites} />
      <ActivityList
        activities={activities}
        isSearchSuccessful={isSearchSuccessful}
        setActivities={setActivities}
      />
      <PageLink path="/" text="Add activitiy" />
    </div>
  );
}
