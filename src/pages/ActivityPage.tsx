import { useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import Search from "../components/Search";
import { Activity } from "../types/types";
import { searchSuccess, sortActivities } from "../utils/utils";
import Sort from "../components/Sort";

interface Props {
  activities: Activity[];
  sortOrder: number;
  setSortOrder: (sortOrder: number) => void;
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

export default function ActivityPage({
  activities,
  sortOrder,
  setSortOrder,
  setActivities,
}: Props) {
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

  const handleSortItems = (value: number) => {
    const sortedActivities = sortActivities(value, activities);
    setActivities(sortedActivities);
    setSortOrder(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-slate-200 to-sky-900">
      <Search onChange={handleSearchActivites} />
      <div className="flex space-x-5 mt-4 pl-2">
        <PageLink path="/" text="Add activitiy" />
        <Sort
          sortItems={[
            "Upcoming",
            "Activity a-z",
            "Place a-z",
            "Priority high-low",
            "Priority low-high",
          ]}
          sortOrder={sortOrder}
          onChange={handleSortItems}
        />
      </div>
      <ActivityList
        activities={activities}
        sortOrder={sortOrder}
        isSearchSuccessful={isSearchSuccessful}
        setActivities={setActivities}
      />
    </div>
  );
}
