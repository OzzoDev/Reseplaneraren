import { currentDate } from "../../utils/utils";

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ({ name, value, placeholder = "", onChange }: Props) {
  return (
    <input
      type="date"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full max-w-[300px] px-10 py-3 border text-center border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black bg-opacity-10 text-white"
      min={currentDate()}
      autoCorrect="off"
      autoComplete="off"
      required
    />
  );
}
