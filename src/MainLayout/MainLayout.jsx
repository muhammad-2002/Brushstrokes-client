import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar";
import TopNav from "../components/header/TopNav/TopNav";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
