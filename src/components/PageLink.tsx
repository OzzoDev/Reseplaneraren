import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

export default function PageLink({ path, text }: Props) {
  return (
    <div className="flex items-center py-[5px] px-[25px] bg-blue-600 rounded-[50px] hover:bg-blue-700 transition duration-200 cursor-pointer mt-20 group">
      <GoArrowRight
        size={24}
        className="text-white mr-2 transition-transform duration-200 group-hover:translate-x-[5px]"
      />
      <Link to={path} className="text-white py-2 px-4 rounded font-semibold">
        {text}
      </Link>
    </div>
  );
}
