import React from "react";
import { FaHome, FaList, FaListAlt } from "react-icons/fa";
import { FaCodePullRequest, FaListCheck, FaUser } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoAddCircleOutline, IoCreateOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdCloseCircle } from "react-icons/io";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

import {
  Drawer,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const handleLogout = () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "LogOut Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };
  // console.log(isAdmin)
  return (
    <div className="dark:bg-blue-gray-900  ">
      <div className="  mx-auto ">
        <div className="flex gap-10">
          <div className=" bg-teal-200 min-h-screen text-white w-60 p-5">
            <div className="flex justify-between shrink-0 p-2 shadow-lg mb-7 items-center">
              <div className="flex hidden  items-center gap-2">
                <Link to="/">
                  {" "}
                  <img alt="Your Company" src={logo} className="h-10 w-auto" />
                </Link>
                <h4 className="font-semibold">ADOPTLY</h4>
              </div>
             
            </div>

            <React.Fragment>
              <Drawer open={open} onClose={closeDrawer} className="p-4 bg-teal-200  w-60 ">
              <div className="flex justify-between shrink-0 p-2 shadow-lg mb-7 items-center">
              <div className="flex  items-center gap-2">
                <Link to="/">
                  {" "}
                  <img alt="Your Company" src={logo} className="h-10 w-auto" />
                </Link>
                <h4 className="font-semibold">ADOPTLY</h4>
              </div>
              <div className="" onClick={closeDrawer}>
              <IoMdCloseCircle className="w-7 h-7" />
              </div>
            </div>
                <ul onClick={closeDrawer} className=" ">
                  <li className="text-sm font-medium"></li>
                  {isAdmin ? (
                    <>
                      {" "}
                      <li>
                        <NavLink
                          to={"/dashboard/adminHome"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaHome></FaHome> Admin Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allUser"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaUser></FaUser> All User
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allPets"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaListAlt></FaListAlt> All Pets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allDonation"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <CiViewList />
                          All Donations
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      {/*  this is user part  */}

                      <li>
                        <NavLink
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                          to={"/dashboard/userHome"}
                        >
                          {" "}
                          <FaHome></FaHome> User Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/add-pet"}
                          className=" active:bg-orange-100 gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <IoAddCircleOutline /> Add a Pet
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/my-pet"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaList />
                          My Added Pets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/adoptionRequest"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaCodePullRequest />
                          Adoption Request
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/add-donation"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <IoCreateOutline />
                          Create Donation Campaign
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/my-campaigns"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <CiViewList />
                          My Donation Campaigns
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/paymentsHistory"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaListCheck />
                          My Donations
                        </NavLink>
                      </li>
                    </>
                  )}

                  {/* home page  */}
                  <div>--------------------------------</div>

                  <li>
                    <NavLink
                      to={"/"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      <FaHome></FaHome> Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/listing"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      {" "}
                      <FaListCheck />
                      Pet Listing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/allCampaigns"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      {" "}
                      <FaList />
                      Donation Campaigns
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/dashboard/profile"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      <FaUser></FaUser> Profile
                    </NavLink>
                  </li>
                </ul>
              </Drawer>
            </React.Fragment>
            <ul className=" hidden lg:block  ">
                  <li className="text-sm font-medium"></li>
                  {isAdmin ? (
                    <>
                      {" "}
                      <li>
                        <NavLink
                          to={"/dashboard/adminHome"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaHome></FaHome> Admin Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allUser"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaUser></FaUser> All User
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allPets"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <FaListAlt></FaListAlt> All Pets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/allDonation"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
     hover:bg-orange-100 hover:text-gray-700"
                        >
                          {" "}
                          <CiViewList />
                          All Donations
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      {/*  this is user part  */}

                      <li>
                        <NavLink
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                          to={"/dashboard/userHome"}
                        >
                          {" "}
                          <FaHome></FaHome> User Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/add-pet"}
                          className=" active:bg-orange-100 gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <IoAddCircleOutline /> Add a Pet
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/my-pet"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaList />
                          My Added Pets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/adoptionRequest"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaCodePullRequest />
                          Adoption Request
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/add-donation"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <IoCreateOutline />
                          Create Donation Campaign
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/my-campaigns"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <CiViewList />
                          My Donation Campaigns
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/dashboard/paymentsHistory"}
                          className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
   hover:bg-orange-100 hover:text-gray-700"
                        >
                          <FaListCheck />
                          My Donations
                        </NavLink>
                      </li>
                    </>
                  )}

                  {/* home page  */}
                  <div>--------------------------------</div>

                  <li>
                    <NavLink
                      to={"/"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      <FaHome></FaHome> Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/listing"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      {" "}
                      <FaListCheck />
                      Pet Listing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/allCampaigns"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      {" "}
                      <FaList />
                      Donation Campaigns
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/dashboard/profile"}
                      className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                    >
                      <FaUser></FaUser> Profile
                    </NavLink>
                  </li>
                </ul>
          </div>

          <div className="flex-1">
            <div className="shadow bg-teal-200 fixed z-10   w-full top-0 right-0 left-60 shark-0 p-2  pr-5 ">
              
              <div className="pl-3  flex w-10/12 items-center justify-between pt-2 ">
              <div onClick={openDrawer}>
                <GiHamburgerMenu className="w-7 h-7" color="white" />
              </div>
                <div className="flex items-center gap-5">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <div>
                    <h3 className="font-semibold text-2xl">
                      {user?.displayName}
                    </h3>
                    <h4>{user?.email}</h4>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className=" mr-7 gap-3 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                >
                  {" "}
                  <IoIosLogOut />
                  Log Out
                </button>
              </div>
            </div>
            <div className=" pr-5 mt-24 ">
              {" "}
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
