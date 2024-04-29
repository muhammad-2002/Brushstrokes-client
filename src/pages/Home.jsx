import React from "react";
import Banner from "../components/Banner/Banner";
import Craft_items from "../components/Craft Items/Craft_items";
import VisitorSaying from "../components/VisitorSaying/VisitorSaying";
import PhotoGallery from "../components/photoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Craft_items></Craft_items>
      <div className="w-[90%] mx-auto mt-8">
        <PhotoGallery></PhotoGallery>
        <VisitorSaying></VisitorSaying>
      </div>
    </div>
  );
};

export default Home;
