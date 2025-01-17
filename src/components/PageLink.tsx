import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

export default function PageLink({ path, text }: Props) {
  return (
    <Link
      to={path}
      className="mt-20 text-blue-600 hover:text-blue-800 font-semibold transition duration-200">
      {text}
    </Link>
  );
}
