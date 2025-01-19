import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/home/Home";
import Error from "../components/Error";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import Listing from "../page/Listing";
import Dashboard from "../layout/Dashboard";
import AddPet from "../page/Dashboard/AddPet";
import PetDetails from "../page/PetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listing",
        element: <Listing></Listing>,
      },
      
      {
        path:"/petDetails/:id",
        element:<PetDetails></PetDetails>

      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/add-pet",
        element: <AddPet></AddPet>,
      },
    ],
  },
]);

export default router;
