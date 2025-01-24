import { useEffect, useRef, useState } from "react";
import { Activity } from "../types/types";
import { RiCalendarTodoFill } from "react-icons/ri";

interface Props {
  activites: Activity[];
}

export default function ActivityCount({ activites }: Props) {
  const [animKey, setAnimKey] = useState<number>(0); // Unique key for animation reset
  const prevNumberOfActivities = useRef<number>(activites.length);

  const numberOfActivites = activites.length;
  const badgeBgColor = numberOfActivites > 0 ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    if (prevNumberOfActivities.current !== activites.length) {
      console.log("Animating");

      // Change the key to force a re-render
      setAnimKey((prev) => prev + 1);

      // Update the reference for the previous number of activities
      prevNumberOfActivities.current = activites.length;
    }
  }, [activites]);

  return (
    <div
      key={animKey} // Use the unique key here
      className={`flex flex-col justify-center items-center relative bg-sky-700 rounded-[10px] w-[46px] h-[46px] ${
        animKey > 0 ? "motion-preset-confetti" : ""
      }`}>
      <RiCalendarTodoFill size={26} color="white" />
      <p
        className={`${badgeBgColor} absolute top-[-8px] right-[-8px] text-center text-[0.8rem] pb-1 text-white w-[1.4rem] h-[1.4rem] flex justify-center items-center rounded-full`}>
        {numberOfActivites}
      </p>
    </div>
  );
}
