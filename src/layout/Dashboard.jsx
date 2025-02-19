import React from "react";
import { FaHome, FaList, FaListAlt } from "react-icons/fa";
import {
  FaBorderAll,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaCodePullRequest,
  FaListCheck,
  FaStar,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import {
  IoAddCircleOutline,
  IoCreateOutline,
  IoMailSharp,
} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  // console.log(isAdmin)
  return (
    <div className="dark:bg-blue-gray-900  ">
      <div className="  mx-auto ">
        <div className="bg-teal-600"></div>
        <div className="flex gap-10">
          <div className="fixed  left-0 bg-teal-300 min-h-screen text-white max-w-fit p-5">
            <div className="flex shrink-0 p-2 shadow-lg mb-7 items-center">
              <Link to="/">
                {" "}
                <img alt="Your Company" src={logo} className="h-10 w-auto" />
              </Link>
              <h4 className="font-semibold">ADOPTLY</h4>
            </div>
            <ul className=" ">
              <li className="text-sm font-medium">
                {user?.email && (
                  <NavLink
                    className="px-3  py-2 bg-teal-300  text-white transition duration-300
                         hover:bg-teal-800  rounded-md"
                    to={"/profile"}
                  >
                    Profile
                  </NavLink>
                )}
              </li>
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
                  to="/"
                  className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                >
                  <FaHome></FaHome> Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/listing"
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
                  to="/allCampaigns"
                  className=" gap-4 items-center flex rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                   hover:bg-orange-100 hover:text-gray-700"
                >
                  {" "}
                  <FaList />
                  Donation Campaigns
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex-1  ">
            <div className="shadow shark-0 p-2  pl-64   pr-5 ">
              <div className="pl-3 flex justify-between pt-2 ">
                <div className="flex items-center gap-5">
                  <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                  <div>
                    <h3 className="font-semibold text-2xl">{user?.displayName}</h3>
                    <h4>{user?.email}</h4>
                  </div>
                  
                </div>
                <button> <IoIosLogOut/> Log Out</button>
                
              </div>
            </div>
            <div className="pl-64 pr-5 ">
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
