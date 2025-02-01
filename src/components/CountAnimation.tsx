import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  children: ReactNode;
}

export default function CountAnimation({ value, children }: Props) {
  const [animateCount, setAnimateCount] = useState<number>(0);
  const prevValue = useRef<number>(value);

  const badgeBgColor = value > 0 ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    if (prevValue.current !== value) {
      setAnimateCount((prev) => prev + 1);

      prevValue.current = value;
    }
  }, [value]);
  return (
    <>
      <p
        className={`${badgeBgColor} absolute top-[10px] right-[10px] text-center text-[0.8rem] text-white w-[1.4rem] h-[1.4rem] flex justify-center items-center rounded-full ${
          animateCount > 0 ? "motion-preset-confetti" : ""
        }`}>
        {value}
      </p>
      {children}
    </>
  );
}
