import { Activity } from "../types/types";

interface Props {
  name: string;
  labelText:string,
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

export default function ActivityInput({name,labelText,activities,setActivities}: Props) {
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newActivites = { ...activities, [name]: value };
    setActivities(newActivites);
  };

  return (
    <div className="input-container">
        <input type="text" name={name} onChange={handleChange} className="activity-input"/>
        <label>{labelText}</label>
    </div>
  );
}
