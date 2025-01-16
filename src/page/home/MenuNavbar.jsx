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
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MenuNavbar = () => {
  const { user, logOutUser } = useAuth();
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

  const NavLinks = (
    <>
      <li
        className=" bg-teal-300  text-white transition duration-300
          hover:bg-orange-100 hover:text-gray-800
          rounded-md px-3 py-2 text-sm font-medium"
      >
        <Link to={"/"}>Home</Link>
      </li>
      <li
        className=" bg-teal-300 text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-800
                        rounded-md px-3 py-2 text-sm font-medium"
      >
        <Link to={"/listing"}>Pet Listing</Link>
      </li>
      <li
        className=" bg-teal-300 text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-800
                        rounded-md px-3 py-2 text-sm font-medium"
      >
        <Link to={"/campaigns"}>Donation Campaigns</Link>
      </li>
      <li className="text-black">{user?.email}</li>
      <li className="text-black">{user?.displayName}</li>
      <li className="text-black size-10"><img src='' alt="" /></li>

    </>
  );
  console.log(user?.email);
  return (
    <div className=" shrink-0 shadow-md">
      <Disclosure as="nav" className="">
        <div className=" container mx-auto py-3   ">
          <div className="relative flex h-10 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative b inline-flex items-center justify-center rounded-md p-1 text-teal-300 hover:bg-teal-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img alt="Your Company" src={logo} className="h-10 w-auto" />
                <h4 className="font-semibold">ADOPTLY</h4>
              </div>
              <div className="hidden  items-center sm:ml-6 sm:block">
                <div className="flex  space-x-4">
                  <ul className="flex items-center gap-5  justify-center">
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
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user?.photoURL}
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute text-center right-0 z-10 p-3   mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
                >
                  <MenuItem>
                    <Link
                      className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-700"
                    >
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/login"}
                      className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-700"
                    >
                      LOGIN
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/register"}
                      className="block rounded-md my-2 px-4 py-2 text-sm bg-teal-300  text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-700"
                    >
                      SIGNUP
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      className="w-full rounded-md px-4 my-2 py-2 text-sm  bg-teal-300  text-white transition duration-300
                           hover:bg-orange-100 hover:text-gray-700"
                    >
                      LOG OUT
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden -mt-2">
          <div className="space-y-3 ml-3  ring-1 ring-black/5 rounded-md p-3 shadow-xl  max-w-48 px-2 pb-3 pt-2">
            <ul className="  space-y-2">{NavLinks}</ul>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default MenuNavbar;
