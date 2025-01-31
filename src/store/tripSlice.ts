import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "../types/types";
import { TRIPS_KEY } from "../constants/constants";

interface TripState {
    trips:Trip[];
}

const initialState:TripState = {
    trips: (() => {
        const storedTrips = localStorage.getItem(TRIPS_KEY);
        if (storedTrips) {
            return JSON.parse(storedTrips)||[];
        }
        return [];
    })()
}

const tripSlice = createSlice({
    name:"trip",
    initialState, 
    reducers:{
        setTrips:(state, action:PayloadAction<Trip[]>)=>{
            state.trips = action.payload; 
            localStorage.setItem(TRIPS_KEY, JSON.stringify(action.payload))
        }
    }
})

export const {setTrips} = tripSlice.actions; 

export default tripSlice.reducer;