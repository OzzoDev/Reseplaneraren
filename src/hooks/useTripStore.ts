import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCallback } from "react";
import { Trip } from "../types/types";
import { setTrips } from "../store/tripSlice";


const useTripManager = ()=>{
    const dispatch = useDispatch();

    const tripState = useSelector((state:RootState)=> state.trip);

    const addTrip  = useCallback(
        (trip:Trip)=>{
            const trips = [...tripState.trips];
            trips.push(trip);
            dispatch(setTrips(trips))
        },[dispatch]
    )

    const deleteTrip  = useCallback(
        (trip:Trip)=>{
            const trips = [...tripState.trips].filter(t=>t.id!==trip.id);
            dispatch(setTrips(trips))
        },[dispatch]
    )

    const editTrip = useCallback(
        (trip:Trip)=>{
            const trips = [...tripState.trips].map(t=>{
                if(t.id===trip.id){
                    return trip;
                }
                return t;
            })
            dispatch(setTrips(trips))
        },[dispatch]
    )

    return {
        trips: tripState.trips,
        addTrip,
        deleteTrip,
        editTrip,
    }
}

export default useTripManager;