import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../page/home/TopNavbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto  p-10 ">
      <header> 
        <TopNavbar></TopNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>this is footer</footer>
    </div>
  );
};

export default HomeLayout;
