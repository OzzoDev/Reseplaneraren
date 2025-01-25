import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useLocalStorage from "./hooks/useLocalStorage";
import { Activity } from "./types/types";
import { ACTIVITES_KEY, SORT_ORDER } from "./constants/constants";
import SkeletonLoader from "./components/SkeletonLoader";
import { Suspense } from "react";
import ActivityPage from "./pages/ActivityPage";
import StartPage from "./pages/StartPage";

function App() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(ACTIVITES_KEY, []);
  const [sortOrder, setSortOrder] = useLocalStorage<number>(SORT_ORDER, 0);
  const location = useLocation();

  const routes = [
    {
      path: "/",
      element: (
        <StartPage activities={activities} sortOrder={sortOrder} setActivities={setActivities} />
      ),
    },
    {
      path: "/activities",
      element: (
        <ActivityPage
          activities={activities}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setActivities={setActivities}
        />
      ),
    },
  ];

  return (
    <Routes location={location}>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
