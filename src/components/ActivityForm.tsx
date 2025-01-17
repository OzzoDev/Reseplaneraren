import { Activity } from "../types/types";
import ActivityDateInput from "./ActivityDateInput";
import ActivityInput from "./ActivityInput";

interface Props{
    activities:Activity[], 
    setActivities:(activities:Activity[])=>void;
}

export default function ActivityForm({activities,setActivities}:Props){

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{

    }

    return (
        <form onSubmit={handleSubmit}>
            <ActivityInput labelText="Activity" name="activity" activities={activities} setActivities={setActivities}/>
            <ActivityInput labelText="Where" name="place" activities={activities} setActivities={setActivities}/>
            <ActivityDateInput labelText="When" activities={activities} setActivities={setActivities}/>
        </form>
    )
}