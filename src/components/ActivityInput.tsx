import { Activity } from "../types/types";

interface Props {
  name: string;
  value: string;
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
  setError: (error: string) => void;
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
 * @param {(error: string) => void} props.error - Function to update from error.
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
 *   setError={setError}
 * />
 */

export default function ActivityInput({
  name,
  value,
  labelText,
  localActivities,
  setLocalActivites,
  setError,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");
    const newActivites = { ...localActivities, [name]: value };
    setLocalActivites(newActivites);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-inherit font-medium" htmlFor={name}>
        {labelText}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        autoCorrect="off"
        autoComplete="off"
        required
      />
    </div>
  );
}
