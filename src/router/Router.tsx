import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import StartPage from "../pages/StartPage";
import ActivityPage from "../pages/ActivityPage";
import RootLayout from "../layouts/RootLayout";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<StartPage />} />
      <Route path="activities" element={<ActivityPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
