import { useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import PageLink from "../components/PageLink";
import Search from "../components/Search";
import { Activity } from "../types/types";
import { calcPageCount, searchSuccess, sortActivities } from "../utils/utils";
import Sort from "../components/Sort";
import ActivityListPaginator from "../components/ActivityListPaginator";
import { MAX_PAGE_ITEMS } from "../constants/constants";

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
  const [pageCount, setPageCount] = useState<number>(calcPageCount(activities, MAX_PAGE_ITEMS));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [latestPaginatedPage, setLatestPaginatedPage] = useState<number>(1);

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

  useEffect(() => {
    setPageCount(calcPageCount(activities, MAX_PAGE_ITEMS));
  }, [activities]);

  const handlePagination = (_: unknown, value: number) => {
    setCurrentPage(value);
    setLatestPaginatedPage(value);
  };

  const noActivities = activities.length === 0;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-200 to-sky-900">
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
        page={currentPage}
        isSearchSuccessful={isSearchSuccessful}
        setActivities={setActivities}
      />
      {!noActivities && <ActivityListPaginator count={pageCount} onChange={handlePagination} />}
    </div>
  );
}
