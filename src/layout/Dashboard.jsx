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

import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin)
  return (
    <div className="  ">
      <div className=" max-w-screen-xl mx-auto ">
        <div></div>
        <div className="flex gap-10">
          <div className="bg-teal-300 text-white max-w-fit p-5">
            <div className="flex shrink-0 mb-7 items-center">
              <Link to="/">
                {" "}
                <img alt="Your Company" src={logo} className="h-10 w-auto" />
              </Link>
              <h4 className="font-semibold">ADOPTLY</h4>
            </div>
            <ul className=" ">
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
                      to={"/dashboard/UserHome"}
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

          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
