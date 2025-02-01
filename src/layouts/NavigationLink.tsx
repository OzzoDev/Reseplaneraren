import { NavLink } from "react-router";

interface Props {
  linkText: string;
  path: string;
}

export default function NavigationLink({ linkText, path }: Props) {
  return (
    <NavLink to={path} className="relative hover:text-gray-400 ">
      {linkText}
    </NavLink>
  );
}
