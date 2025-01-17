import { Activity } from "../types/types";

interface Props {
    labelText:string,
    activities: Activity[];
    setActivities: (activities: Activity[]) => void;
}

export default function ActivityDateInput({labelText,activities,setActivities}: Props){
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newActivites = { ...activities, [name]: value };
        setActivities(newActivites);
      };
    
      return (
        <div className="input">
          <input type="date" name="date" onChange={handleChange} className="input" autoComplete="off"/>
          <label>{labelText}</label>
        </div>
      );
}