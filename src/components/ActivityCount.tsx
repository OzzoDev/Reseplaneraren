import { useEffect, useRef, useState } from "react";
import { Activity } from "../types/types";
import { RiCalendarTodoFill } from "react-icons/ri";

interface Props {
  activites: Activity[];
}

export default function ActivityCount({ activites }: Props) {
  const [animationClass, setAnimationClass] = useState<string>("");
  const prevNumberOfActivities = useRef<number>(activites.length);

  const animate = prevNumberOfActivities.current !== activites.length;

  useEffect(() => {
    if (animate) {
      setAnimationClass("motion-preset-confetti");

      const timeoutID = setTimeout(() => {
        setAnimationClass("");
      }, 1000);

      prevNumberOfActivities.current = activites.length;

      return () => clearTimeout(timeoutID);
    }
  }, [activites]);

  const numberOfActivites = activites.length;

  const badgeBgColor = numberOfActivites > 0 ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`flex flex-col justify-center items-center absolute top-5 left-3 bg-sky-700 rounded-[10px] w-[40px] h-[40px] ${animationClass}`}>
      <RiCalendarTodoFill size={24} color="white" />
      <p
        className={`${badgeBgColor} absolute top-[-8px] right-[-8px] text-center text-[0.8rem] pb-1 text-white w-[1.4rem] h-[1.4rem] flex justify-center items-center rounded-full`}>
        {numberOfActivites}
      </p>
    </div>
  );
}
