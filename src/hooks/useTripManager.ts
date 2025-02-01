import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCallback } from "react";
import { Activity, Trip } from "../types/types";
import { setTrips } from "../store/tripSlice";
import { generateID } from "../utils/utils";

const useTripManager = () => {
  const dispatch = useDispatch();

  const tripState = useSelector((state: RootState) => state.trip);

  const updateTrips = useCallback(
    (trips: Trip[]) => {
      dispatch(setTrips(trips));
    },
    [dispatch, tripState.trips]
  );

  const addTrip = useCallback(
    (trip: Trip) => {
      const trips = [...tripState.trips, { ...trip, id: generateID(tripState.trips) }];
      dispatch(setTrips(trips));
    },
    [dispatch, tripState.trips]
  );

  const deleteTrip = useCallback(
    (trip: Trip) => {
      console.log(trip);

      const trips = [...tripState.trips].filter((t) => t.id !== trip.id);
      dispatch(setTrips(trips));
    },
    [dispatch, tripState.trips]
  );

  const editTrip = useCallback(
    (trip: Trip) => {
      const trips = [...tripState.trips].map((t) => {
        if (t.id === trip.id) {
          return trip;
        }
        return t;
      });
      dispatch(setTrips(trips));
    },
    [dispatch, tripState.trips]
  );

  const deleteAllTrips = useCallback(() => {
    dispatch(setTrips([]));
  }, [dispatch]);

  const getTrip = useCallback(
    (id: number) => {
      return tripState.trips.find((t) => t.id === id);
    },
    [tripState.trips]
  );

  const getActivity = useCallback(
    (trip: Trip, activityID: number) => {
      return trip.activities.find((act) => act.id === activityID);
    },
    [tripState.trips]
  );

  const addActivity = useCallback(
    (trip: Trip, activity: Activity) => {
      const updatedTrips = tripState.trips.map((t) => {
        if (t.id === trip.id) {
          return {
            ...trip,
            activities: [...trip.activities, { ...activity, id: generateID(trip.activities) }],
          };
        }
        return t;
      });
      dispatch(setTrips(updatedTrips));
    },
    [dispatch]
  );

  const editActivity = useCallback(
    (trip: Trip, activity: Activity) => {
      const updatedTrips = tripState.trips.map((t) => {
        if (t.id === trip.id) {
          const updatedActivities = trip.activities.map((act) => {
            if (act.id === activity.id) {
              return activity;
            }
            return act;
          });
          return { ...trip, activities: updatedActivities };
        }
        return t;
      });
      dispatch(setTrips(updatedTrips));
    },
    [dispatch]
  );

  const deleteActivity = useCallback(
    (trip: Trip, activity: Activity) => {
      const updatedTrips = tripState.trips.map((t) => {
        if (t.id === trip.id) {
          const updatedActivities = trip.activities.filter((act) => act.id !== activity.id);
          return { ...trip, activities: updatedActivities };
        }
        return t;
      });
      dispatch(setTrips(updatedTrips));
    },
    [dispatch]
  );

  const deleteActivities = useCallback(
    (trip: Trip) => {
      const updatedTrips = tripState.trips.map((t) => {
        if (t.id === trip.id) {
          return { ...trip, activities: [] };
        }
        return t;
      });
      dispatch(setTrips(updatedTrips));
    },
    [dispatch]
  );

  const searchActivities = useCallback(
    (trip: Trip, searchQuery: string) => {
      const updatedTrips = tripState.trips.map((t) => {
        if (t.id === trip.id) {
          const normalizedSearchQuery = searchQuery.trim().toLowerCase();

          const searchedActivities = trip.activities.map((act) => {
            if (normalizedSearchQuery) {
              act.isVisible = act.activity.toLowerCase().includes(normalizedSearchQuery);
            } else {
              act.isVisible = true;
            }
            return act;
          });

          return { ...trip, activities: searchedActivities };
        }
        return t;
      });

      dispatch(setTrips(updatedTrips));
    },
    [dispatch]
  );

  return {
    trips: tripState.trips,
    getTrip,
    addTrip,
    deleteTrip,
    editTrip,
    updateTrips,
    deleteAllTrips,
    getActivity,
    addActivity,
    editActivity,
    deleteActivity,
    deleteActivities,
    searchActivities,
  };
};

export default useTripManager;
