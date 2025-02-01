import { useNavigate, useParams } from "react-router";
import ActivityItem from "../components/activity/ActivityItem";
import useTripManager from "../hooks/useTripManager";
import NotFoundPage from "./NotFoundPage";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { GoArrowRight } from "react-icons/go";

export default function ActivityDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { activityid: activityID } = useParams();
  const { getTrip, getActivity } = useTripManager();

  const trip = getTrip(Number(id));

  if (!trip) {
    return <NotFoundPage />;
  }

  const activity = getActivity(trip, Number(activityID));

  if (!activity) {
    return <NotFoundPage />;
  }

  const handleNavigateBack = () => {
    navigate(`/trips/trip/${id}`);
  };
  return (
    <div className="flex flex-col space-y-20 pt-10">
      <PrimaryBtn
        btnText="Go back"
        onClick={handleNavigateBack}
        children={<GoArrowRight size={24} />}
      />
      <ActivityItem trip={trip} activity={activity} isEditable={true} />
    </div>
  );
}
