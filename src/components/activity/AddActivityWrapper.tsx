import { useNavigate, useParams } from "react-router";
import PrimaryBtn from "../btn/PrimaryBtn";
import { GoArrowRight } from "react-icons/go";
import ActivityForm from "./ActivityForm";

export default function AddActivityWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToActivities = () => {
    navigate(`/trips/trip/${id}`);
  };

  return (
    <div className="flex flex-col space-y-40 py-10 px-8">
      <div className="flex w-fit">
        <PrimaryBtn
          btnText="See activities"
          onClick={navigateToActivities}
          children={<GoArrowRight size={24} />}
        />
      </div>
      <ActivityForm />
    </div>
  );
}
