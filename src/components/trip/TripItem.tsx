import { Trip } from "../../types/types";
import { useNavigate } from "react-router";
import { PiGear } from "react-icons/pi";
import PrimaryBtn from "../btn/PrimaryBtn";
import TripProperty from "./TripProperty";
import React from "react";

interface Props {
  trip: Trip;
}

function TripItem({ trip }: Props) {
  const navigate = useNavigate();

  const navigateToTripDetails = () => {
    navigate(`/trips/trip/${trip.id}`);
  };

  return (
    <li className="relative flex justify-between items-center p-4 py-10 bg-gray-950 bg-opacity-40 mb-8 h-[120px]">
      <TripProperty labelText="From" property={trip.from} />
      <TripProperty labelText="To" property={trip.to} />
      <TripProperty labelText="When" property={trip.date} />
      <div>
        <PrimaryBtn
          btnText="Mange trip"
          onClick={navigateToTripDetails}
          children={<PiGear size={24} />}
        />
      </div>
    </li>
  );
}

export default React.memo(TripItem);
