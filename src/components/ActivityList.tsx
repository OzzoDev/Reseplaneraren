import { Activity } from "../types/types";
import ActivityItem from "./ActivityItem";

interface Props{
    activities:Activity[], 
    setActivities:(activities:Activity[])=>void;
}

export default function ActivityList({activities,setActivities}:Props){

    const deleteActivity = (activity:string)=>{
        const updatedActivities = activities.filter((act)=>{
            return act.activity !== activity;
        });

        setActivities(updatedActivities);
    }

    return (
        <ul className="activity-list">
            {activities.map(activity=>{
                return <ActivityItem activity={activity} deleteActivity={deleteActivity}/>
            })}
        </ul>
    )
}