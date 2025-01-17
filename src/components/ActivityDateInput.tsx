import { Activity } from "../types/types";

interface Props {
  value: string;
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
}

/**
 * A component for inputting a date associated with an activity.
 *
 * @param {Props} props - The properties for the component.
 * @param {string} props.value - The current date value for the input.
 * @param {string} props.labelText - The label text for the date input.
 * @param {Activity} props.localActivities - The current local activities object.
 * @param {(activities: Activity) => void} props.setLocalActivites - Function to update local activities.
 *
 * @returns {JSX.Element} The rendered date input element.
 *
 * @example
 * <ActivityDateInput
 *   value={activityDate}
 *   labelText="Select Date"
 *   localActivities={localActivities}
 *   setLocalActivites={setLocalActivities}
 * />
 */

export default function ActivityDateInput({
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
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-gray-700 font-medium" htmlFor="date">
        {labelText}
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={value}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
}
