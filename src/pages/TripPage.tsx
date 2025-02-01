import { useEffect, useState } from "react";
import { MAX_PAGE_ITEMS } from "../constants/constants";
import { Trip } from "../types/types";
import useTripManager from "../hooks/useTripManager";
import TripListPaginator from "../components/trip/TripListPaginator";
import Search from "../components/Search";
import { calcPageCount, showOnPagination } from "../utils/utils";
import TripList from "../components/trip/TripList";
import DangerBtn from "../components/btn/DangerBtn";
import { FaRegTrashAlt } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { GoArrowRight } from "react-icons/go";

export default function TripPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { trips, deleteAllTrips } = useTripManager();
  const [pageCount, setPageCount] = useState<number>(calcPageCount(trips, MAX_PAGE_ITEMS));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [latestPaginatedPage, setLatestPaginatedPage] = useState<number>(1);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(
    trips.filter((_, index) => showOnPagination(index, currentPage))
  );

  useEffect(() => {
    setPageCount(calcPageCount(trips, MAX_PAGE_ITEMS));
  }, [trips, filteredTrips]);

  const handleSearchTrips = (searchQuery: string) => {
    const updatedTrips: Trip[] = filteredTrips.map((trip) => {
      const from = trip.from.toLowerCase();
      const to = trip.to.toLowerCase();

      return {
        ...trip,
        isVisible:
          from.includes(searchQuery.toLowerCase()) || to.includes(searchQuery.toLowerCase()),
      };
    });

    setFilteredTrips(updatedTrips);

    if (searchQuery) {
      setCurrentPage(1);
    } else {
      setCurrentPage(latestPaginatedPage);
    }
  };

  const handleDeleteTrips = () => {
    setFilteredTrips([]);
    deleteAllTrips();
  };

  const handlePagination = (_: unknown, value: number) => {
    setCurrentPage(value);
    setLatestPaginatedPage(value);
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const noTrips = trips.length === 0;

  if (id) {
    return <Outlet />;
  }

  return (
    <div className="grow flex flex-col">
      <Search placeholder="Search trips" onChange={handleSearchTrips} />
      <div className="flex justify-between mt-4 px-2 w-full">
        <div className="flex gap-x-4">
          <PrimaryBtn
            btnText="Add trip"
            onClick={handleNavigateToHome}
            children={<GoArrowRight size={24} />}
          />
        </div>
        {!noTrips && (
          <DangerBtn
            btnText="Clear all trips"
            icon={<FaRegTrashAlt />}
            onClick={handleDeleteTrips}
          />
        )}
      </div>
      <TripList trips={filteredTrips} page={currentPage} />
      {!noTrips && <TripListPaginator count={pageCount} onChange={handlePagination} />}
    </div>
  );
}
