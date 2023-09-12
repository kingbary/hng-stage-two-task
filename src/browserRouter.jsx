import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/_index";
import Movies from "./routes/_movies";
import ErrorPage from "./error-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/hng-stage-two-task"
      element={<Outlet />}
      errorElement={<ErrorPage />}
    >
      <Route index={true} element={<Root />} />
      <Route path="movie/:movieId" element={<Movies />} />
    </Route>
  )
);