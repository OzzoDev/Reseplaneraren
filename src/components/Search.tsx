import { CiSearch } from "react-icons/ci";

interface Props {
  onChange: (searchQurey: string) => void;
}

export default function Search({ onChange }: Props) {
  return (
    <div className="absolute top-0 left-0 right-0 w-full mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiSearch />
        </div>
        <input
          type="text"
          onChange={(event) => onChange(event.target.value.toLowerCase())}
          className="block w-full p-4 ps-10 text-sm bg-white text-gray-900 focus:outline-none dark:placeholder-gray-400"
          placeholder="Search activities"
          required
        />
      </div>
    </div>
  );
}
