import { ReactNode } from "react";

interface Props {
  btnText: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children?: ReactNode;
}

export default function PrimaryBtn({
  btnText,
  type = "button",
  children,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center text-white font-semibold py-[10px] px-[25px] bg-blue-800 rounded-[50px] hover:bg-blue-700 transition duration-200 cursor-pointer group"
    >
      <div className="text-white mr-2 transition-transform duration-200 group-hover:translate-x-[5px]">
        <>{children}</>
      </div>
      {btnText}
    </button>
  );
}
