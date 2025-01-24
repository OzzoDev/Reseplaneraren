import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  return <Skeleton count={10} height={100} />;
}
