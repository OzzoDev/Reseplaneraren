import { Activity } from "../types/types";

interface Props {
    value:string,
    labelText:string,
    localActivities: Activity;
    setLocalActivites: (activities: Activity) => void;
}

export default function ActivityDateInput({value,labelText,localActivities,setLocalActivites}: Props){
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newActivites = { ...localActivities, [name]: value };
        setLocalActivites(newActivites);
    };
    
    return (
      <div className="input">
        <input type="date" name="date" value={value} onChange={handleChange} className="input" required/>
        <label>{labelText}</label>
      </div>
    );
}