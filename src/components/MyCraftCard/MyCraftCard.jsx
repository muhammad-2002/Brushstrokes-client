import axios from "axios";
import React from "react";
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
    console.log(id);
    const remaining = myItems.filter((item) => item._id !== id);
    console.log(remaining);
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
          <div className="card-actions justify-start gap-4">
            <Link
              to={`/update-art&carft/${_id}`}
              className="bg-[#0DBC95] rounded-sm border-solid border-[#0DBC95] border-2 py-2 px-3 w-[100px] hover:text-white text-center font-bold"
            >
              Update
            </Link>
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="bg-[#e90000] border-solid border-[#e90000] border-2 py-2 px-3 w-[100px] rounded-sm text-center hover:text-white font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
