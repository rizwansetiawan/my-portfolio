import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../Pages/Home";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}>
        <Route index element={<MainPage />} />
      </Route>
    </>
  )
);
