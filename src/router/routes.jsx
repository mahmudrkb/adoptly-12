import { createBrowserRouter, } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/home/Home";
import Error from "../components/Error";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path:"/login",
    element:<Login></Login>
  },{
    path:"/register",
    element:<Register></Register>,
  }
]);

export default router;
