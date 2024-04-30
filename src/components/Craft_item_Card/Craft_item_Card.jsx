import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Craft_item_Card = ({ item }) => {
  const { setLoading } = useContext(AuthContext);
  const {
    name,
    ItemName,
    subcategoryName,
    description,
    price,
    stock,
    customization,
    image,
    rating,
    processing_time,
    email,
    _id,
  } = item;

  return (
    <div className="hover:scale-105 transition-transform rounded-[6px]">
      <div>
        <figure className="h-[210px] md:h-[180px]">
          <img className="w-full" src={image} alt="Oopps!" />
        </figure>
        <div className="card-body bg-[#123841] text-white">
          <h2 className="card-title">{ItemName}</h2>
          <p>{description}</p>
          <div className=" flex justify-start ">
            <p className="font-bold">Rating: {rating}</p>
            <p className="font-bold">Price: ${price}</p>
          </div>
          <div className=" flex justify-start  gap-10">
            <p className="font-bold">Stock Status: {stock}</p>
            <p className="font-bold">Customization: {customization}</p>
          </div>
          <div className="card-actions justify-start gap-4">
            <Link
              to={`/details_craft_item/${_id}`}
              className="bg-[#0DBC95] rounded-sm border-solid border-[#0DBC95] border-2 py-1 px-3 w-full hover:text-white text-center font-bold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft_item_Card;
