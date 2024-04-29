import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar";
import TopNav from "../components/header/TopNav/TopNav";

const MainLayout = () => {
  return (
    <div>
      <div className="sm:h-0 md:h-[36px] w-full">
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
