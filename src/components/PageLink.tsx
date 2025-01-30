import { GoArrowRight } from "react-icons/go";
import { Link, NavLink } from "react-router";

interface Props {
  text: string;
  path: string;
}

export default function PageLink({ path, text }: Props) {
  return (
    <Link
      to={path}
      className="flex items-center text-white font-semibold py-[10px] px-[25px] bg-blue-600 rounded-[50px] hover:bg-blue-700 transition duration-200 cursor-pointer group">
      <GoArrowRight
        size={24}
        className="text-white mr-2 transition-transform duration-200 group-hover:translate-x-[5px]"
      />
      {text}
    </Link>
  );
}
