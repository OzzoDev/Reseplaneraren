import { useNavigate } from "react-router";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { GoHome } from "react-icons/go";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="m-auto flex flex-col space-y-10">
      <h1 className="m-auto text-3xl text-red-500">404 - Not found</h1>
      <PrimaryBtn btnText="Go to Home" onClick={handleNavigateToHome}>
        <GoHome size={24} />
      </PrimaryBtn>
    </div>
  );
}
