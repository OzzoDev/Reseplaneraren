import { useEffect, useState } from "react";
import TripForm from "../components/trip/TripForm";
import { RESTCOUNTRIES_URL } from "../constants/constants";
import { Country } from "../types/types";

export default function StartPage() {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(RESTCOUNTRIES_URL);
      const result: Country[] = await data.json();
      const countryNames = result.map((item) => item.name.common);
      console.log(countryNames);

      setCountries(countryNames);
    };

    fetchCountries();
  }, []);

  return <TripForm countries={countries} />;
}
