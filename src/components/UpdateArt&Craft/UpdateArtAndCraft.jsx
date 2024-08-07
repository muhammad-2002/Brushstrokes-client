import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const UpdateArtAndCraft = ({}) => {
  const param = useParams();
  const [data, setData] = useState([]);
  console.log(data);
  console.log(param);

  const { user } = useContext(AuthContext);
  console.log(user.photoURL);

  useEffect(() => {
    fetch(`http://localhost:5000/items-update/${param.id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ItemName = form.ItemName.value;
    const processing_time = form.processing_time.value;
    const subcategoryName = form.subcategoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const customization = form.customization.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const userPhoto = user.photoURL;

    const Craft = {
      ItemName,
      userPhoto,
      subcategoryName,
      description,
      price,
      stock,
      customization,
      image,
      rating,
      processing_time,
    };

    axios
      .put(`https://brushstrock.vercel.app/items-update/${param.id}`, Craft)
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Data updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => console.log(error));
  };
  const {
    ItemName,
    subcategoryName,
    description,
    price,
    stock,
    customization,
    image,
    rating,
    processing_time,
    userPhoto,
  } = data;
  return (
    <div className="w-[90%] mx-auto ">
      <div>
        <Link to="/">
          <p className="inline-flex justify-center items-center gap-2 heading-color font-bold text-md pt-6 text-[#0DBC95] ">
            {" "}
            <IoArrowBackOutline />
            Back To Home
          </p>
        </Link>
        <div className="bg-gray-100 rounded-md p-16 mt-6">
          <div className="space-y-7">
            <h1 className="text-center text-[#0DBC95] text-4xl font-bold tracking-tight ">
              Update Art & Craft Item
            </h1>
            <p className="w-[80%] mx-auto rale-way text-center ">
              "Unleash Your Creativity with Our Latest Art & Craft Supplies!
              From vibrant paints to intricate beads, explore endless
              possibilities to express your imagination and craft masterpieces
              that inspire."
            </p>
          </div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleSubmit}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-2 gap-6 p-6 ">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="subcategory_Name" className="text-sm">
                      Item name
                    </label>
                    <input
                      type="text"
                      defaultValue={ItemName}
                      name="ItemName"
                      placeholder="Enter Item_name"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="subcategory_Name" className="text-sm">
                      Subcategory_Name
                    </label>
                    <input
                      defaultValue={subcategoryName}
                      id="subcategory_Name"
                      type="text"
                      name="subcategoryName"
                      placeholder="Enter subcategory_Name"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="short description" className="text-sm">
                      Short description
                    </label>
                    <input
                      id="short description"
                      type="text"
                      defaultValue={description}
                      name="description"
                      placeholder="Enter short description"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="price" className="text-sm">
                      Price
                    </label>
                    <input
                      defaultValue={price}
                      id="price"
                      type="text"
                      name="price"
                      placeholder="Enter price"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      StockStatus
                    </label>
                    <input
                      defaultValue={stock}
                      id="lastname"
                      type="text"
                      name="stock"
                      placeholder="Enter Stock Status"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Rating
                    </label>
                    <input
                      defaultValue={rating}
                      id="lastname"
                      type="text"
                      name="rating"
                      placeholder="Enter Rating"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Customization
                    </label>
                    <input
                      defaultValue={customization}
                      id="lastname"
                      type="text"
                      name="customization"
                      placeholder="Enter customization"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      processing_time
                    </label>
                    <input
                      defaultValue={processing_time}
                      id="stockStatus"
                      type="text"
                      name="processing_time"
                      placeholder="Enter processing_time"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                </div>
                <div className=" col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Image
                    </label>
                    <input
                      defaultValue={image}
                      id="image"
                      type="text"
                      name="image"
                      placeholder="Enter image"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                </div>

                <div className="col-span-full lg:col-span-3  text-white border-[1px]">
                  <input
                    className="bg-[#0DBC95] cursor-pointer p-1 w-full font-bold "
                    type="submit"
                    value="Update"
                  />
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateArtAndCraft;
