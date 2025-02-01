import { useState } from "react";
import ActivityList from "../components/activity/ActivityList";
import Search from "../components/Search";
import { Activity } from "../types/types";
import useTripManager from "../hooks/useTripManager";
import { FaRegTrashAlt } from "react-icons/fa";
import DangerBtn from "../components/btn/DangerBtn";
import { useNavigate, useParams } from "react-router";
import NotFoundPage from "./NotFoundPage";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { GoArrowRight } from "react-icons/go";

export default function ActivityPage() {
  const navigate = useNavigate();
  const { getTrip } = useTripManager();
  const { id } = useParams();
  const trip = getTrip(Number(id));

  if (!trip) {
    return <NotFoundPage />;
  }

  const { deleteActivities } = useTripManager();
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>(trip.activities);

  const handleSearchActivites = (searchQuery: string) => {
    const updatedActivities: Activity[] = filteredActivities.map((activity) => {
      const act = activity.activity.toLowerCase();

      return {
        ...activity,
        isVisible: act.includes(searchQuery.toLowerCase()),
      };
    });

    setFilteredActivities(updatedActivities);
  };

  const handleDeleteActivities = () => {
    setFilteredActivities([]);
    deleteActivities(trip);
  };

  const navigateToActivityForm = () => {
    navigate(`/trips/trip/${id}/addactivity`);
  };

  const noActivities = filteredActivities.length === 0;

  return (
    <div className="grow flex flex-col">
      <Search placeholder="Search activities" onChange={handleSearchActivites} />
      <div className="flex justify-between mt-4 px-2 w-full">
        <div className="flex gap-x-4">
          <PrimaryBtn
            btnText="Add activitiy"
            onClick={navigateToActivityForm}
            children={<GoArrowRight size={24} />}
          />
        </div>
        {!noActivities && (
          <DangerBtn
            btnText="Delete activities"
            icon={<FaRegTrashAlt />}
            onClick={handleDeleteActivities}
          />
        )}
      </div>
      <ActivityList trip={trip} activities={filteredActivities} />
    </div>
  );
}
