import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ArtCraftDetails = () => {
  const paramsData = useParams();
  //   useEffect(() => {
  //     // Fetch data from the database using Axios
  //     axios
  //       .get(`http://localhost:5000/items/${paramsData}`)
  //       .then((response) => setItems(response.data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);
  const loaderData = useLoaderData();

  console.log(loaderData);
  const {
    name,
    email,
    ItemName,
    processing_time,
    subcategoryName,
    description,
    price,

    stock,
    customization,
    image,
    rating,
  } = loaderData;
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="flex justify-center flex-col items-center pt-10">
            <h1 className="text-xl font-bold text-black">USER NAME: {name}</h1>

            <h1 className="text-xl font-bold text-black">
              USER EMAIL: {email}
            </h1>
          </div>
          <div className="container flex flex-col justify-center p-6 mx-auto lg:py-24 lg:flex-row lg:justify-around md:justify-between  md: gap-3">
            <div className="flex items-center justify-center p-2 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border-[#0DBC95] border-2">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col justify-start  items-start p-2 text-center rounded-sm lg:max-w-[50%] xl:max-w-lg lg:text-left border-[#0DBC95] border-2">
              <h1 className="text-xl font-bold leading-none sm:text-3xl">
                ITEM NAME: {ItemName}
              </h1>
              <br />
              <h1 className="font-bold text-start text-xl">
                Subcategory Name: {subcategoryName}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-5">{description}</p>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex justify-start md:justify-between  md:w-[50%] lg:w-[30%] items-start font-bold">
                  <p>Rating: {rating}</p>
                  <p>Price: ${price}</p>
                </div>
                <div className="flex justify-start md:justify-between flex-col  font-bold items-start">
                  <p>Stock Status: {stock}</p>
                  <p>Processing Time: {processing_time || "00"}hours</p>
                </div>
              </div>

              <div className=" border w-full text-white  flex justify-center items-center gap-3 mt-4 bg-[#0DBC95]">
                <IoArrowBackOutline />
                <Link to="/" className="px- py-2 text-lg   font-bold  ">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtCraftDetails;
