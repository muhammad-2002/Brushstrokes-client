import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmits = (data) => {
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
    } = data;

    const Craft = {
      name: user.displayName,

      ItemName,
      subcategoryName,
      description,
      price,
      stock,
      customization,
      image,
      rating,
      processing_time,
      email: user.email,
      userPhoto: user.photoURL,
    };

    axios.post("https://brushstoks.vercel.app/items", Craft).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "Data added Successfully",
          icon: "success",
          confirmButtonText: "ok",
        });
      }
    });
  };

  return (
    <div className="md:w-[90%] w-[95%] mx-auto ">
      <div>
        <Link to="/">
          <p className="inline-flex justify-center items-center gap-2 heading-color font-bold text-md pt-6 text-[#0DBC95] ">
            {" "}
            <IoArrowBackOutline />
            Back To Home
          </p>
        </Link>
        <div className="bg-gray-100 rounded-md md:p-16  mt-6">
          <div className="space-y-7">
            <h1 className="text-center md:pt-0 pt-5 text-4xl font-bold tracking-tight text-black">
              Add Art Item
            </h1>
            <p className="w-full md:[85%] mx-auto rale-way text-center ">
              Explore an array of creative possibilities as you effortlessly
              enhance your collection with our intuitive feature. Discover,
              curate, and add new items to your craft inventory seamlessly.
            </p>
          </div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleSubmit(handleSubmits)}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-2 gap-6 p-6 ">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor=" item_name" className="text-sm">
                      User Name
                    </label>
                    <input
                      id="  User Name"
                      type="text"
                      value={user?.displayName}
                      placeholder="Enter User Name"
                      className="w-full p-2 rale-way border-[#0DBC95]  bg-gray-200 border-[1px] text-sm outline-0  "
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="subcategory_Name" className="text-sm">
                      User Email
                    </label>
                    <input
                      id="User Email"
                      type="email"
                      name="email"
                      value={user?.email}
                      placeholder="Enter User Email"
                      className="w-full bg-gray-200 border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="subcategory_Name" className="text-sm">
                      Item name
                    </label>
                    <input
                      {...register("ItemName", { required: true })}
                      placeholder="Enter Item_name"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.ItemName && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="subcategory_Name" className="text-sm">
                      Subcategory_Name
                    </label>
                    <input
                      {...register("subcategoryName", { required: true })}
                      id="subcategory_Name"
                      type="text"
                      placeholder="Enter subcategory_Name"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.subcategoryName && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
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
                      {...register("description", { required: true })}
                      placeholder="Enter short description"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.description && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="price" className="text-sm">
                      Price
                    </label>
                    <input
                      id="price"
                      type="text"
                      {...register("price", { required: true })}
                      placeholder="Enter price"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.price && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      StockStatus
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      {...register("stock", { required: true })}
                      placeholder="Enter Stock Status"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.stock && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Rating
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      {...register("rating", { required: true })}
                      placeholder="Enter Rating"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.rating && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Customization
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      {...register("customization", { required: true })}
                      placeholder="Enter customization"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.customization && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      processing_time
                    </label>
                    <input
                      id="stockStatus"
                      type="text"
                      {...register("processing_time", { required: true })}
                      placeholder="Enter processing_time"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.processing_time && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                </div>
                <div className=" col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Image
                    </label>
                    <input
                      id="image"
                      type="text"
                      {...register("image", { required: true })}
                      placeholder="Enter image"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                    {errors.image && (
                      <span className="text-sm text-red-700">
                        This field is required.
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-full lg:col-span-3 text-white border-[1px]">
                  <input
                    className="bg-[#0DBC95] p-1 w-full font-bold "
                    type="submit"
                    value="Add Art"
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

export default AddCraft;
