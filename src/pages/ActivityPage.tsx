import { useEffect } from "react";
import ActivityList from "../components/ActivityList";
import { Activity } from "../types/types"
import { Link } from "react-router-dom";

interface Props{
    activities:Activity[], 
    setActivities:(activities:Activity[])=>void;
}

export default function ActivityPage({activities,setActivities}:Props){

    useEffect(()=>{
        console.log("Activit: ", activities);
    },[]);

    return (
        <>
            <ActivityList activities={activities} setActivities={setActivities}/>
            <Link to="/">Add activities</Link>
        </>
    );
}