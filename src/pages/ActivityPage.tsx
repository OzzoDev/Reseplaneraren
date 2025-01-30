import { useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import Search from "../components/Search";
import { Activity } from "../types/types";
import { calcPageCount, searchSuccess, sortActivities } from "../utils/utils";
import Sort from "../components/Sort";
import ActivityListPaginator from "../components/ActivityListPaginator";
import { ACTIVITES_KEY, MAX_PAGE_ITEMS, SORT_ORDER } from "../constants/constants";
import ClearActivitiesBtn from "../components/ClearActivitiesBtn";
import useLocalStorage from "../hooks/useLocalStorage";

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

// export default function ActivityPage({
//   activities,
//   sortOrder,
//   setSortOrder,
//   setActivities,
// }: Props) {
export default function ActivityPage() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(ACTIVITES_KEY, []);
  const [sortOrder, setSortOrder] = useLocalStorage<number>(SORT_ORDER, 0);
  const [isSearchSuccessful, setIsSearchSuccessful] = useState<boolean>(searchSuccess(activities));
  const [pageCount, setPageCount] = useState<number>(calcPageCount(activities, MAX_PAGE_ITEMS));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [latestPaginatedPage, setLatestPaginatedPage] = useState<number>(1);

  useEffect(() => {
    setIsSearchSuccessful(searchSuccess(activities));
    setPageCount(calcPageCount(activities, MAX_PAGE_ITEMS));
  }, [activities]);

  const clearAllActivites = () => {
    setActivities([]);
  };

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

    if (searchQurey) {
      setCurrentPage(1);
    } else {
      setCurrentPage(latestPaginatedPage);
    }
  };

  const handleSortItems = (value: number) => {
    const sortedActivities = sortActivities(value, activities);
    setActivities(sortedActivities);
    setSortOrder(value);
  };

  const handlePagination = (_: unknown, value: number) => {
    setCurrentPage(value);
    setLatestPaginatedPage(value);
  };

  const noActivities = activities.length === 0;

  return (
    <div className="grow flex flex-col">
      <Search onChange={handleSearchActivites} />
      <div className="flex justify-between mt-4 px-2 w-full">
        <div className="flex gap-x-4">
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
        {!noActivities && <ClearActivitiesBtn onClick={clearAllActivites} />}
      </div>
      <ActivityList
        activities={activities}
        sortOrder={sortOrder}
        page={currentPage}
        isSearchSuccessful={isSearchSuccessful}
        setActivities={setActivities}
      />
      {!noActivities && <ActivityListPaginator count={pageCount} onChange={handlePagination} />}
    </div>
  );
}
