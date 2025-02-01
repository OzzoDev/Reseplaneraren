import { Activity } from "../../types/types";

interface Props {
  name: string;
  value: string;
  labelText: string;
  localActivities: Activity;
  setLocalActivites: (activities: Activity) => void;
  setError: (error: string) => void;
}

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
