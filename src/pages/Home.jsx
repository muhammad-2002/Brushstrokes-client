import React from "react";
import { Helmet } from "react-helmet-async";
import ArtCatagories from "../components/ArtCatgories/ArtCatagories";
import Banner from "../components/Banner/Banner";
import Craft_items from "../components/Craft Items/Craft_items";
import VisitorSaying from "../components/VisitorSaying/VisitorSaying";
import PhotoGallery from "../components/photoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Brush Stroke </title>
      </Helmet>
      <Banner></Banner>
      <Craft_items></Craft_items>
      <div className="w-[90%] mx-auto mt-8">
        <ArtCatagories></ArtCatagories>
        <PhotoGallery></PhotoGallery>

        <VisitorSaying></VisitorSaying>
      </div>
    </div>
  );
};

export default Home;
