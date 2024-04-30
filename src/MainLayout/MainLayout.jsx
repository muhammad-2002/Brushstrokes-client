import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar";
import TopNav from "../components/header/TopNav/TopNav";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);
  return (
    <div className="">
      <div className="h-[90px] raw:h-[800px] sm:h-[66px] md:h-[36px] w-full">
        <TopNav></TopNav>
      </div>
      <div className="h-[64px] -mb-3 md:mb-0">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
