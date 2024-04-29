import React, { useEffect, useState } from "react";
import Craft_item_Card from "../Craft_item_Card/Craft_item_Card";

const Craft_items = () => {
  const [craftItem, setCraftItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setCraftItem(data));
  }, []);
  return (
    <>
      <div className="space-y-7 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-8 border-b-2 border-[#0DBC95] font-bold tracking-tight text-[#0DBC95]">
          Art Item
        </h1>
        <p className="w-[90%] md:w-[75%] mx-auto rale-way text-center ">
          Immerse yourself in the world of painting and drawing, where every
          stroke tells a story and every sketch captures a moment. Unleash your
          imagination and explore the boundless possibilities of visual
          expression
        </p>
      </div>
      <div className="grid mx-auto grid-col-1 md:grid-cols-2 mt-10 gap-10 md:w-[90%] lg:[85%] w-[95%] lg:grid-cols-3">
        {craftItem.map((item) => (
          <Craft_item_Card item={item} key={Math.random()}></Craft_item_Card>
        ))}
      </div>
    </>
  );
};

export default Craft_items;
