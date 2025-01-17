import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ActivityPage from "./pages/ActivityPage";
import { Activity } from "./types/types";
import useLocalStorage from "./hooks/useLocalStorage";
import { ACTIVITES_KEY } from "./constants/contants";
import { useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(
    ACTIVITES_KEY,
    []
  );

  useEffect(() => {
    setActivities((prevActivites) =>
      prevActivites.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
  }, [activities]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/activities"
          element={
            <ActivityPage
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
