import { useEffect, useState } from "react";
import Input from "./Input";
import { Trip } from "../../types/types";
import { defaultTrip } from "../../constants/constants";
import InputDate from "./InputDate";
import PrimaryBtn from "../btn/PrimaryBtn";
import { IoAddSharp } from "react-icons/io5";
import useTripManager from "../../hooks/useTripManager";
import { isNewTrip } from "../../utils/utils";
import ErrorMessage from "../ErrorMessage";

export default function TripForm() {
  const { trips, addTrip } = useTripManager();
  const [trip, setTrip] = useState<Trip>(defaultTrip);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  const handleTripChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrip((prevTrips) => ({ ...prevTrips, [name]: value }));
    setError("");
  };

  const handleAddTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNewTrip(trip, trips)) {
      addTrip(trip);
      setTrip(defaultTrip);
    } else {
      setError("Trip already exists");
    }
  };

  return (
    <form onSubmit={handleAddTrip} className="flex flex-col space-y-10 max-w-md m-auto">
      <Input placeholder="From" name="from" value={trip.from} onChange={handleTripChange} />
      <Input placeholder="To" name="to" value={trip.to} onChange={handleTripChange} />
      <InputDate placeholder="When" name="date" value={trip.date} onChange={handleTripChange} />
      <ErrorMessage error={error} />
      <PrimaryBtn btnText="Add Trip" type="submit">
        <IoAddSharp size={24} />
      </PrimaryBtn>
    </form>
  );
}
