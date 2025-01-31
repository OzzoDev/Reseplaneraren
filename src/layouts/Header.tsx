import { NavLink } from "react-router";
import logo from "../assets/logo.svg";
import NavigationLink from "./NavigationLink";

export default function Header() {
  return (
    <header className="fixed bg-black bg-opacity-20 w-full text-white text-lg">
      <nav className="flex justify-between items-center p-2">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-[50px] brightness-[140%]" />
        </NavLink>
        <ul>
          <li>
            <NavigationLink path="/activities" linkText="Activites" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
