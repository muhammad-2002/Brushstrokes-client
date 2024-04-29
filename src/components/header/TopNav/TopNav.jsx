import React from "react";
import { FaClock, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className="sm:px-5  z-30 py-2  md:block text-sm fixed bg-[#123841] lg:flex flex-col sm:flex-row justify-between items-center rale-way w-full">
      <div className="mb-2 sm:mb-0">
        {" "}
        <h2 className="font-bold text-white flex justify-center items-center">
          <span className="heading-color inline-flex gap-2 justify-center items-center mr-1">
            <FaClock />
            OPENING HOURS :
          </span>
          08.00 AM - 09.00 PM
        </h2>
      </div>
      <div className="mb-2 sm:mb-0 text-lg flex justify-center items-center gap-5">
        {" "}
        {/* Add margin bottom for small screens */}
        <div className="text-white font-bold">
          <IoLogoFacebook />
        </div>
        <div className="text-white font-bold">
          <FaYoutube />
        </div>
        <div className="text-white font-bold">
          <FaTwitter />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-white flex items-center justify-center">
          <span className="heading-color inline-flex gap-2 items-center justify-center mr-1">
            <FaLocationDot />
            LOCATION :
          </span>
          DHAKA BANGLADESH
        </h2>
      </div>
    </div>
  );
};

export default TopNav;
