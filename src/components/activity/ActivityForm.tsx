import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { defaultActivity, priorityMap } from "../../constants/constants";
import useTripManager from "../../hooks/useTripManager";
import NotFoundPage from "../../pages/NotFoundPage";
import { Activity, Priority } from "../../types/types";
import { isNewActivity } from "../../utils/utils";
import ErrorMessage from "../ErrorMessage";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";
import PrioritySelector from "./PrioritySelector";
import PrimaryBtn from "../btn/PrimaryBtn";
import { IoAddSharp } from "react-icons/io5";

export default function ActivityForm() {
  const { id: tripID } = useParams();
  const { getTrip } = useTripManager();
  const [error, setError] = useState<string>("");
  const [tempActivity, setTempActivity] = useState<Activity>(defaultActivity);
  const { addActivity } = useTripManager();
  const trip = getTrip(Number(tripID));

  if (!trip) {
    return <NotFoundPage />;
  }

  const [activities, setActivities] = useState<Activity[]>(trip.activities);

  useEffect(() => {
    setActivities(trip.activities);
  }, [trip.activities]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isNewActivity(tempActivity, activities)) {
      addActivity(trip, tempActivity);
      setTempActivity(defaultActivity);
    } else {
      setError("Activity already exists");
    }
  };

  const handleSetPriority = (priority: Priority) => {
    setTempActivity((prevActivity) => ({
      ...prevActivity,
      priority,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 rounded-lg shadow-md m-auto max-w-lg w-full space-y-4 text-white bg-gray-950 bg-opacity-40">
      <h2 className="text-2xl font-semibold text-center">Add New Activity</h2>
      <ActivityInput
        labelText="Activity"
        name="activity"
        value={tempActivity.activity}
        localActivities={tempActivity}
        setLocalActivites={setTempActivity}
        setError={setError}
      />
      <ActivityInput
        labelText="Where"
        name="place"
        value={tempActivity.place}
        localActivities={tempActivity}
        setLocalActivites={setTempActivity}
        setError={setError}
      />
      <ActivityDateInput
        labelText="When"
        localActivities={tempActivity}
        setLocalActivites={setTempActivity}
        setError={setError}
      />
      <PrioritySelector
        priorities={priorityMap}
        currentPriority={tempActivity.priority}
        setPriority={handleSetPriority}
      />
      <ErrorMessage error={error} />
      <PrimaryBtn type="submit" btnText="Add">
        <IoAddSharp size={24} />
      </PrimaryBtn>
    </form>
  );
}
