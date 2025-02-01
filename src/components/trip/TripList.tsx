import { showOnPagination } from "../../utils/utils";
import TripItem from "./TripItem";
import { Trip } from "../../types/types";

interface Props {
  trips: Trip[];
  page: number;
}

export default function TripList({ trips, page }: Props) {
  const noActivities = trips.length === 0;

  if (noActivities) {
    return <h2 className="text-5xl text-white m-auto">No trips planned yet!</h2>;
  }

  const filteredTrips = trips
    .filter((trip) => trip.isVisible)
    .filter((_, index) => showOnPagination(index, page));

  if (filteredTrips.length === 0) {
    return <h2 className="text-5xl text-white m-auto">No matching trips!</h2>;
  }

  return (
    <ul className="m-auto mt-[200px] w-full text-white grow">
      {filteredTrips.map((trip) => {
        return <TripItem key={trip.id} trip={trip} />;
      })}
    </ul>
  );
}
