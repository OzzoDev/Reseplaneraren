import { ReactNode, useRef, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import useOutsideClick from "../../hooks/useOutsideClick";

interface Props {
  btnText: string;
  icon: ReactNode;
  onClick: () => void;
}

export default function DangerBtn({ btnText, icon, onClick }: Props) {
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
      type="button"
      onClick={handleClick}
      className="flex items-center gap-x-2 rounded-full bg-red-600 px-6 py-2 text-white text-[1rem] font-semibold hover:bg-red-700 transition duration-200">
      {btnText}
      {!hasConfirmed ? <>{icon}</> : <IoCheckmarkSharp />}
    </button>
  );
}
