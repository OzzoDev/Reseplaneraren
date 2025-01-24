import { IoSearch } from "react-icons/io5";

interface Props {
  /**
   * Callback function to handle changes in the search input.
   *
   * @param {string} searchQuery - The current search query entered by the user.
   */
  onChange: (searchQuery: string) => void;
}

/**
 * A component that renders a search input for filtering activities.
 *
 * @param {Props} props - The properties for the component.
 * @param {(searchQuery: string) => void} props.onChange - Function to call when the search input changes.
 *
 * @returns {JSX.Element} The rendered search input component.
 *
 * @example
 * <Search onChange={(query) => console.log(query)} />
 */
export default function Search({ onChange }: Props) {
  return (
    <div className="w-full border-b-2 border-grey-900 text-white">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch />
        </div>
        <input
          type="text"
          onChange={(event) => onChange(event.target.value.toLowerCase())}
          className="block w-full p-4 ps-10 text-sm bg-gradient-to-l from-slate-200 to-sky-900 focus:outline-none dark:placeholder-white"
          placeholder="Search activities"
          required
        />
      </div>
    </div>
  );
}
