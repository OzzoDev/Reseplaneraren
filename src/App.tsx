import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useLocalStorage from "./hooks/useLocalStorage";
import { Activity } from "./types/types";
import { ACTIVITES_KEY } from "./constants/constants";
import SkeletonLoader from "./components/SkeletonLoader";

const StartPage = lazy(() => import("./pages/StartPage"));
const ActivityPage = lazy(() => import("./pages/ActivityPage"));

function App() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(ACTIVITES_KEY, []);
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Suspense fallback={<SkeletonLoader />}>
          <Routes location={location}>
            <Route
              path="/"
              element={<StartPage activities={activities} setActivities={setActivities} />}
            />
            <Route
              path="/activities"
              element={<ActivityPage activities={activities} setActivities={setActivities} />}
            />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
}

const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
