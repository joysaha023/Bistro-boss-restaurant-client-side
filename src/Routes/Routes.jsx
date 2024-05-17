import Main from "../Layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        }
    ]
  },
]);

export default router;
