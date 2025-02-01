import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import StartPage from "../pages/StartPage";
import RootLayout from "../layouts/RootLayout";
import NotFoundPage from "../pages/NotFoundPage";
import TripPage from "../pages/TripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ActivityPage from "../pages/ActivityPage";
import AddActivityWrapper from "../components/activity/AddActivityWrapper";
import ActivityDetailsPage from "../pages/ActivityDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<StartPage />} />
      <Route path="trips" element={<TripPage />}>
        <Route path="trip/:id" element={<TripDetailsPage />}>
          <Route index element={<ActivityPage />} />
          <Route path="activity/:activityid" element={<ActivityDetailsPage />} />
          <Route path="addactivity" element={<AddActivityWrapper />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
