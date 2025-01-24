import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

  const routes = [
    {
      path: "/",
      element: <StartPage activities={activities} setActivities={setActivities} />,
    },
    {
      path: "/activities",
      element: <ActivityPage activities={activities} setActivities={setActivities} />,
    },
  ];

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Suspense fallback={<SkeletonLoader />}>
          <Routes location={location}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
