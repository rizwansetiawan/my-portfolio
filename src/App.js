import { RouterProvider } from "react-router-dom";
import { router } from "./Navigators";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
