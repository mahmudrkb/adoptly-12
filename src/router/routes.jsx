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
import MyPets from './../page/Dashboard/MyPets';
import UpdatePet from "../page/Dashboard/UpdatePet";
import AddDonation from "../page/Dashboard/Donation/AddDonation";
import MyCampaigns from "../page/Dashboard/Donation/MyCampaigns";
import UpdateDonation from "../page/Dashboard/Donation/UpdateDonation";

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
      {
        path: "/dashboard/my-pet",
        element: <MyPets></MyPets>,
      },
      {
        path: "/dashboard/update-pet/:id",
        element:<UpdatePet></UpdatePet>,
      },
      {
        path:"/dashboard/add-donation",
        element:<AddDonation></AddDonation>,
      },
      {
        path:"/dashboard/my-campaigns",
        element:<MyCampaigns></MyCampaigns>,
      },
      {
        path:"/dashboard/update-donation/:id",
        element:<UpdateDonation></UpdateDonation>,
      },

    ],
  },
]);

export default router;
