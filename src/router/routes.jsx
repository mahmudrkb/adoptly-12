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
import MyPets from "./../page/Dashboard/MyPets";
import UpdatePet from "../page/Dashboard/UpdatePet";
import AddDonation from "../page/Dashboard/Donation/AddDonation";
import MyCampaigns from "../page/Dashboard/Donation/MyCampaigns";
import UpdateDonation from "../page/Dashboard/Donation/UpdateDonation";
import AllCampaigns from "../page/campaigns/AllCampaigns";
import DetailsCam from "../page/campaigns/DetailsCam";
import AdoptionRequest from "../page/Dashboard/AdoptionRequest";
import PrivateRoute from "./PrivateRoute";

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
        path: "/petDetails/:id",
        element: <PetDetails></PetDetails>,
      },
      {
        path: "/allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
      },
      {
        path: "/detailsCam/:id",
        element: <DetailsCam></DetailsCam>,
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
        element: (
          <PrivateRoute>
            {" "}
            <AddPet></AddPet>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-pet",
        element: (
          <PrivateRoute>
            {" "}
            <MyPets></MyPets>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-pet/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdatePet></UpdatePet>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-donation",
        element: (
          <PrivateRoute>
            <AddDonation></AddDonation>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-campaigns",
        element: (
          <PrivateRoute>
            <MyCampaigns></MyCampaigns>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-donation/:id",
        element: (
          <PrivateRoute>
            <UpdateDonation></UpdateDonation>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adoptionRequest",
        element: (
          <PrivateRoute>
            <AdoptionRequest></AdoptionRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
