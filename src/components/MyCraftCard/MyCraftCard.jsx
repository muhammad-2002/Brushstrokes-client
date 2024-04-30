import axios from "axios";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCraftCard = ({ item, myItems, setMyItems }) => {
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

  const handleDelete = (id) => {
    const remaining = myItems.filter((item) => item._id !== id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://brushstoks.vercel.app/items/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMyItems(remaining);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="hover:scale-105 transition-transform rounded-[6px]">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="card card-compact bg-base-100 rounded-[6px] md:h-[400px] lg:auto shadow-xl "
      >
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
          <div className="card-actions cursor-pointer justify-start gap-4">
            <Link
              to={`/update-art&carft/${_id}`}
              className="bg-[#0DBC95]  rounded-sm border-solid  py-2 px-3 text-xl hover:bg-black text-white  text-center font-bold"
            >
              <GrUpdate />
            </Link>
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="bg-[#e90000] border-solid   py-2 px-3 text-white text-xl hover:bg-black rounded-sm text-center cursor-pointer hover:text-white font-bold"
              >
                <MdDeleteOutline />
              </button>
            </div>
            <div>
              <div className="card-actions cursor-pointer justify-start gap-4">
                <Link
                  to={`/art&craft_details/${_id}`}
                  className="bg-[#5c5c5b] border-solid   py-2 px-3 text-white text-xl hover:bg-black rounded-sm text-center cursor-pointer hover:text-white font-bold"
                >
                  <FaRegEye />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
