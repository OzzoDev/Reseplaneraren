import { IoSearch } from "react-icons/io5";

interface Props {
  /**
   * Callback function to handle changes in the search input.
   *
   * @param {string} searchQuery - The current search query entered by the user.
   */
  placeholder: string;
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
export default function Search({ placeholder, onChange }: Props) {
  return (
    <div className="w-full text-white">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch />
        </div>
        <input
          type="text"
          onChange={(event) => onChange(event.target.value.toLowerCase())}
          className="block w-full p-4 ps-10 text-sm bg-sky-700 focus:outline-none dark:placeholder-white"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
