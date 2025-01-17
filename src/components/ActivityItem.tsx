import { Activity } from "../types/types";

interface Props{
    activity:Activity,
    deleteActivity:(activity:string)=>void;
}

export default function ActivityItem({activity,deleteActivity}:Props){
    const handleDelete = () => {
        deleteActivity(activity.activity); 
    };

    return (
        <li className="activity-item">
            <h3 className="activity-item-name">{activity.activity}</h3>
            <p className="activity-item-place">{activity.place}</p>
            <p className="activity-item-date">{activity.date}</p>
            <button onClick={handleDelete}>x</button>
        </li>
    )
}