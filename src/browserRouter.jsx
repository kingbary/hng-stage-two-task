import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/_index";
import Movies from "./routes/_movies";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/hng-stage-two-task" element={<Root />}>
      <Route path="movies" element={<Movies />} />
    </Route>
  )
);
