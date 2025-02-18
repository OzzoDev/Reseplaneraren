import { ReactNode } from "react";

interface Props {
  btnText: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children?: ReactNode;
}

export default function PrimaryBtn({ btnText, type = "button", children, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-fit m-auto text-white font-semibold py-[10px] px-[25px] bg-cyan-600 rounded-[50px] hover:bg-cyan-700 transition duration-200 cursor-pointer group">
      <div className="text-white mr-2 transition-transform duration-200 group-hover:translate-x-[5px]">
        <>{children}</>
      </div>
      {btnText}
    </button>
  );
}
