import { useState } from "react";
import { Activity } from "../types/types";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";

interface Props{
    activities:Activity[], 
    setActivities:(activities:Activity[])=>void;
}

export default function ActivityForm({activities,setActivities}:Props){
    const [localActivities, setLocalActivites] = useState<Activity>({activity:"",place:"",date:""});

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const updatedActivities = [...activities, localActivities];
        setActivities(updatedActivities);
        setLocalActivites({activity:"",place:"",date:""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <ActivityInput labelText="Activity" name="activity" value={localActivities.activity} localActivities={localActivities} setLocalActivites={setLocalActivites}/>
            <ActivityInput labelText="Where" name="place" value={localActivities.place} localActivities={localActivities} setLocalActivites={setLocalActivites}/>
            <ActivityDateInput labelText="When" value={localActivities.date} localActivities={localActivities} setLocalActivites={setLocalActivites}/>
            <button>Add</button>
        </form>
    )
}