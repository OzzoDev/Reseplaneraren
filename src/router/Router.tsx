import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFoundPage from "../pages/NotFoundPage";
import TripPage from "../pages/TripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ActivityPage from "../pages/ActivityPage";
import AddActivityWrapper from "../components/activity/AddActivityWrapper";
import ActivityDetailsPage from "../pages/ActivityDetailsPage";
import { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const StartPage = lazy(() => import("../pages/StartPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<PuffLoader size={50} color="black" />}>
            <StartPage />
          </Suspense>
        }
      />
      <Route path="trips" element={<TripPage />}>
        <Route path="trip/:id" element={<TripDetailsPage />}>
          <Route index element={<ActivityPage />} />
          <Route path="activity/:activityid" element={<ActivityDetailsPage />} />
          <Route path="addactivity" element={<AddActivityWrapper />} />
        </Route>
      </Route>
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
