import { NavLink } from "react-router";
import logo from "../assets/logo.svg";
import NavigationLink from "./NavigationLink";
import CountAnimation from "../components/CountAnimation";
import useTripManager from "../hooks/useTripManager";

export default function Header() {
  const { trips } = useTripManager();

  return (
    <header className="fixed bg-black bg-opacity-20 w-full text-white text-lg">
      <nav className="flex justify-between items-center p-2">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-[50px] brightness-[140%]" />
        </NavLink>
        <ul className="px-6 flex space-x-8">
          <li className="relative">
            <CountAnimation value={trips.length}>
              <NavigationLink path="/trips" linkText="Trips" />
            </CountAnimation>
          </li>
          <li>
            <NavigationLink path="/about" linkText="About" />
          </li>
          <li>
            <NavigationLink path="/contact" linkText="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
