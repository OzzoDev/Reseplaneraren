import { Activity } from "../types/types";

interface Props {
  name: string;
  value: string;
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
}

export default function ActivityInput({ name, value, labelText, localActivities, setLocalActivites }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newActivites = { ...localActivities, [name]: value };
    setLocalActivites(newActivites);
  };

  return (
    <div className="input-container">
      <input type="text" name={name} value={value} onChange={handleChange} className="activity-input" autoCorrect="off" autoComplete="off" required />
      <label>{labelText}</label>
    </div>
  );
}
