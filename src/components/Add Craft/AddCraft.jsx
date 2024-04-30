import axios from "axios";
import { useContext } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const ItemName = form.ItemName.value;
    const processing_time = form.processing_time.value;
    const subcategoryName = form.subcategoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    // const details = form.details.value;
    const stock = form.stock.value;
    const customization = form.customization.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const email = user.email;
    const userPhoto = user.photoURL;
    const Craft = {
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
      userPhoto,
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
            <h1 className="text-center text-4xl font-bold tracking-tight text-black">
              Add Craft Item
            </h1>
            <p className="w-[80%] mx-auto rale-way text-center ">
              Explore an array of creative possibilities as you effortlessly
              enhance your collection with our intuitive feature. Discover,
              curate, and add new items to your craft inventory seamlessly.
            </p>
          </div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form
              onSubmit={handleSubmit}
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
                      type="text"
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
                      id="image"
                      type="text"
                      name="image"
                      placeholder="Enter image"
                      className="w-full border-[#0DBC95] border-[1px] p-2 rale-way text-sm outline-0  "
                    />
                  </div>
                </div>
                <div className="col-span-full lg:col-span-3 text-white border-[1px]">
                  <input
                    className="bg-[#0DBC95] p-1 w-full font-bold "
                    type="submit"
                    value="Add Craft"
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
