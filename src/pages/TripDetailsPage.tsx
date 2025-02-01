import { Outlet, useNavigate, useParams } from "react-router";
import useTripManager from "../hooks/useTripManager";
import NotFoundPage from "./NotFoundPage";
import TripProperty from "../components/trip/TripProperty";
import DangerBtn from "../components/btn/DangerBtn";
import { IoTrashOutline } from "react-icons/io5";

export default function TripDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { activityid: activityID } = useParams();
  const { getTrip, deleteTrip } = useTripManager();

  const trip = getTrip(Number(id));

  if (!trip) {
    return <NotFoundPage />;
  }

  if (activityID) {
    return <Outlet />;
  }

  const handleDelete = () => {
    deleteTrip(trip);
    navigate("/trips");
  };

  return (
    <div>
      <div className="flex justify-between items-center pr-2 bg-cyan-800">
        <div className="flex space-x-4 p-4">
          <TripProperty property={trip.from} labelText="From" />
          <TripProperty property={trip.to} labelText="To" />
          <TripProperty property={trip.date} labelText="When" />
        </div>
        <DangerBtn
          btnText="Delete Trip"
          onClick={handleDelete}
          icon={<IoTrashOutline size={20} />}
        />
      </div>
      <Outlet />
    </div>
  );
}
