import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Craft_item_Card from "../Craft_item_Card/Craft_item_Card";

const SubCategories = () => {
  const param = useParams();

  const [SubCatagories, setSubCatagories] = useState([]);

  useState(() => {
    fetch(
      `http://localhost:5000/ietm-by-Sub-catagory/${param.sub_catetagory_name}`
    )
      .then((res) => res.json())
      .then((data) => setSubCatagories(data));
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto mt-10 md:w-[85%] lg:w-[90%] ">
      <Helmet>
        <title>Brush Stroke -SubCategories</title>
      </Helmet>
      {SubCatagories?.map((item) => (
        <Craft_item_Card item={item} key={Math.random()}></Craft_item_Card>
      ))}
    </div>
  );
};

export default SubCategories;
