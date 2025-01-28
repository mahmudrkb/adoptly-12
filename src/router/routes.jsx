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
import AllUser from "../page/Dashboard/admin/AllUser";
import AllPets from "../page/Dashboard/admin/AllPets";
import AdminRoute from "./AdminRoute";
import AllDonations from "../page/Dashboard/admin/AllDonations";
import MyDonation from "../page/Dashboard/Donation/MyDonation";
import UserHome from "../page/Dashboard/Donation/UserHome";
import AdminHome from "../page/Dashboard/admin/AdminHome";

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
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            {" "}
            <PrivateRoute>
              <AdminHome></AdminHome>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            {" "}
            <PrivateRoute>
              <AllUser></AllUser>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allPets",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AllPets></AllPets>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDonation",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AllDonations></AllDonations>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/userHome",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentsHistory",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },
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
