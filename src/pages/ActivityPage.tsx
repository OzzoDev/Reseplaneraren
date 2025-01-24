import { useState } from "react";
import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import Search from "../components/Search";
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
  const [filteredActivites, setFilteredActivites] =
    useState<Activity[]>(activities);

  const handleSearchActivites = (searchQurey: string) => {
    const updatedActivities: Activity[] = activities.filter((activity) => {
      return activity.activity.toLowerCase().includes(searchQurey);
    });

    setFilteredActivites(updatedActivities);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-300 bg-gradient-to-t from-slate-200 to-sky-900">
      <Search onChange={handleSearchActivites} />
      <ActivityList
        activities={activities}
        filteredActivities={filteredActivites}
        setActivities={setActivities}
      />
      <PageLink path="/" text="Add activitiy" />
    </div>
  );
}
