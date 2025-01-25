import { useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

interface Props {
  onClick: () => void;
}

export default function ClearActivitiesBtn({ onClick }: Props) {
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(btnRef, () => setHasConfirmed(false));

  const handleClick = () => {
    if (hasConfirmed) {
      onClick();
      setHasConfirmed(false);
    } else {
      setHasConfirmed(true);
      setTimeout(() => {
        setHasConfirmed(false);
      }, 2000);
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="flex items-center gap-x-2 rounded-full bg-red-600 px-6 text-white text-[1rem] font-semibold hover:bg-red-700 transition duration-200">
      Clear all activites
      {!hasConfirmed ? <FaRegTrashAlt /> : <IoCheckmarkSharp />}
    </button>
  );
}
