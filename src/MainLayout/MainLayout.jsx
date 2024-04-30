import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar";
import TopNav from "../components/header/TopNav/TopNav";

const MainLayout = () => {
  return (
    <div className="">
      <div className="h-[90px] raw:h-[800px] sm:h-[66px] md:h-[36px] w-full">
        <TopNav></TopNav>
      </div>
      <div className="h-[64px]">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
