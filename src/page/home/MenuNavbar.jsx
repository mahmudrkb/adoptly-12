import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaRegCircleUser } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
import { IoMoon, IoSunny } from "react-icons/io5";
import React from "react";

const MenuNavbar = () => {
  const { user, logOutUser } = useAuth();
  const [isAdmin] = useAdmin();

  const navigate = useNavigate();
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
   //tailwind config add darkMode: 'class',
   const [dark, setDark] = React.useState(false);

   const darkModeHandler = () => {
     setDark(!dark);
     document.body.classList.toggle("dark");
   };

  const NavLinks = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className="  bg-teal-300  text-white transition duration-300
           hover:bg-teal-800
          rounded-md px-3 py-2 text-sm font-medium"
        >
          Home
        </NavLink>
      </li>

      <li className="text-sm font-medium">
        <NavLink
          className="px-3  py-2 bg-teal-300  text-white transition duration-300
           hover:bg-teal-800  rounded-md"
          to={"/listing"}
        >
          Pet Listing
        </NavLink>
      </li>
      <li
        className="
           text-sm font-medium"
      >
        <NavLink
          className="px-3 py-2 bg-teal-300  text-white transition duration-300
           hover:bg-teal-800  rounded-md"
          to={"/allCampaigns"}
        >
          Donation Campaigns
        </NavLink>
      </li>

      {/* <li
        className="
           text-sm font-medium"
      >
        <NavLink
          className="px-3 py-2 bg-teal-300  text-white transition duration-300
           hover:bg-teal-800  rounded-md"
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="  text-white top-0 fixed w-full bg-opacity-80 md:bg-teal-700 md:dark:bg-blue-gray-900  z-10 shrink-0 shadow-md">
      <Disclosure as="nav" className="">
        <div className=" container mx-auto py-3   ">
          <div className="relative h-10 flex  items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative b inline-flex items-center justify-center rounded-md p-1 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block   size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden  size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex dark:bg-blue-gray-900 bg-teal-700 py-3 flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  {" "}
                  <img alt="Your Company" src={logo} className="h-10 w-auto" />
                </Link>
                <h4 className="font-semibold">ADOPTLY</h4>
              </div>
              <div className="hidden   items-center sm:ml-6 sm:block">
                <div className="flex mt-2    space-x-4">
                  <ul className="flex   items-center gap-5  justify-center">
                    {NavLinks}
                  </ul>
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="text-3xl mx-5" onClick={darkModeHandler}>
              {dark ? <IoSunny /> : <IoMoon />}
            </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 ">
                <div>
                  <MenuButton className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {user?.email ? (
                      <img
                        alt=""
                        src={user?.photoURL}
                        className="size-8 rounded-full"
                      />
                    ) : (
                      <FaRegCircleUser className="size-8 text-gray-800" />
                    )}
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute text-center right-0 z-10 p-3   mt-2 w-48 origin-top-right rounded-md dark:bg-blue-gray-900 bg-white py-1 shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
                >
                  <MenuItem>
                    {user?.email ? (
                      isAdmin ? (
                        <Link
                          to={"/dashboard/adminHome"}
                          className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                       hover:bg-orange-100 hover:text-gray-700"
                        >
                          DASHBOARD
                        </Link>
                      ) : (
                        <Link
                          to={"/dashboard/userHome"}
                          className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                     hover:bg-orange-100 hover:text-gray-700"
                        >
                          DASHBOARD
                        </Link>
                      )
                    ) : (
                      <Link
                        to={"/register"}
                        className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                         hover:bg-orange-100 hover:text-gray-700"
                      >
                        SIGN UP
                      </Link>
                    )}
                  </MenuItem>
                  
                  {user?.email ? (
                    <MenuItem>
                      <button
                        onClick={handleLogout}
                        className="w-full rounded-md px-4 my-2 py-2 text-sm  bg-teal-300  text-white transition duration-300
                         hover:bg-orange-100 hover:text-gray-700"
                      >
                        LOG OUT
                      </button>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link
                        to={"/login"}
                        className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-700"
                      >
                        LOG IN
                      </Link>
                    </MenuItem>
                  )}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden pt-2 -mt-2 ">
          <div className="space-y-3 ml-3 dark:bg-blue-gray-900 bg-white ring-1 ring-black/5 rounded-md p-3 shadow-xl  max-w-48 px-2 pb-3 pt-2">
            <ul className="  space-y-3">{NavLinks}</ul>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default MenuNavbar;
