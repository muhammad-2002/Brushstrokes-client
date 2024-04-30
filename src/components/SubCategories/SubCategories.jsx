import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Craft_item_Card from "../Craft_item_Card/Craft_item_Card";

const SubCategories = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const param = useParams();
  console.log(param.sub_catetagory_name);
  // const paramData = param.sub_catetagory_name;
  // const result = p.split(" ").join("_");
  // console.log(r);
  const [SubCatagories, setSubCatagories] = useState([]);

  useState(() => {
    fetch(
      `https://brushstrock.vercel.app/ietm-by-Sub-catagory/${param.sub_catetagory_name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCatagories(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px] space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
      </div>
    );
  }
  return (
    <>
      <div className="space-y-7 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-8 border-b-2 border-[#0DBC95] font-bold tracking-tight text-[#0DBC95]">
          Art Sub Catagories
        </h1>
        <p className="w-[95%] md:w-[75%] mx-auto rale-way text-center ">
          Art subcategories offer a diverse canvas of creativity, each stroke
          narrating a unique tale, beckoning exploration and expression. From
          the intricate lines of Portrait Drawing to the boundless hues of
          Watercolour Painting, they unveil a world where imagination knows no
          bounds.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto mt-10 md:w-[85%] lg:w-[90%] ">
        {SubCatagories?.map((item) => (
          <Craft_item_Card item={item} key={Math.random()}></Craft_item_Card>
        ))}
      </div>
    </>
  );
};

export default SubCategories;
