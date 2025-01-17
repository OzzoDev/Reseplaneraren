import { Link } from "react-router-dom";
import ActivityForm from "../components/ActivityForm";
import { Activity } from "../types/types"

interface Props{
    activities:Activity[], 
    setActivities:(activities:Activity[])=>void;
}

export default function StartPage({activities,setActivities}:Props){

    return (
        <>
            <ActivityForm activities={activities} setActivities={setActivities}/>
            <Link to="/activities">See my activities</Link>
        </>
    );
}