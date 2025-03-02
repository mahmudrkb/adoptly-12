import React from "react";
import { Outlet } from "react-router-dom";
import MenuNavbar from "../page/home/MenuNavbar";
import Footer from "../page/home/Footer";

const HomeLayout = () => {
  return (
    <div className="  ">
      <header className="top-0 sticky z-10" >
        <MenuNavbar  ></MenuNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        {" "}
        <Footer></Footer>{" "}
      </footer>
    </div>
  );
};

export default HomeLayout;
