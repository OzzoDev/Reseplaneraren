import { Activity } from "../types/types";

interface Props {
  name: string;
  value: string;
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
}

/**
 * A component for inputting activity details.
 *
 * @param {Props} props - The properties for the component.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {string} props.labelText - The label text for the input field.
 * @param {Activity} props.localActivities - The current local activities object.
 * @param {(activities: Activity) => void} props.setLocalActivites - Function to update local activities.
 *
 * @returns {JSX.Element} The rendered input element for activities.
 *
 * @example
 * <ActivityInput
 *   name="activity"
 *   value={localActivities.activity}
 *   labelText="Activity"
 *   localActivities={localActivities}
 *   setLocalActivites={setLocalActivites}
 * />
 */

export default function ActivityInput({
  name,
  value,
  labelText,
  localActivities,
  setLocalActivites,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newActivites = { ...localActivities, [name]: value };
    setLocalActivites(newActivites);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className="activity-input"
        autoCorrect="off"
        autoComplete="off"
        required
      />
      <label>{labelText}</label>
    </div>
  );
}
