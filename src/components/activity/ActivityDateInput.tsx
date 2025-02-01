import { useState } from "react";
import { Activity } from "../../types/types";
import { currentDate } from "../../utils/utils";

interface Props {
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
  setError: (error: string) => void;
}

export default function ActivityDateInput({
  labelText,
  localActivities,
  setLocalActivites,
  setError,
}: Props) {
  const [dateValue, setDateValue] = useState<string>(currentDate());
  const today = new Date();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateValue(value);
    setError("");
    const inputDate = new Date(value);
    const isValidDate = inputDate.toString() !== "Invalid Date" && inputDate >= today;

    if (isValidDate) {
      const newActivities = { ...localActivities, [name]: value };
      setLocalActivites(newActivities);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-inherit font-medium" htmlFor="date">
        {labelText}
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={dateValue}
        onChange={handleChange}
        min={currentDate()}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        required
      />
    </div>
  );
}
