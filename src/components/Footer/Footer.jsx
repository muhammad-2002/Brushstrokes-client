import React from "react";
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import { PiPencilCircle } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#123841] mt-12 text-white">
      <footer className="footer md:relative   px-2 py-4 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 justify-center items-center text-base-content">
        <nav className="font-medium md:col-span-4  text-gray-600 space-y-4 lg:col-span-1">
          <div className="flex gap-2 flex-row md:flex-row md:justify-center  items-center text-white">
            <div className=" text-3xl text-[#0DBC95]">
              <PiPencilCircle />
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-[#0DBC95]">BRUSH</span> STROKES
            </h1>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <BsFacebook className="text-2xl" />
            <BsPinterest className="text-2xl" />
            <BsTwitter className="text-2xl" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center">
            <input
              className="border-[#0DBC95] border-2 px-4 py-1 outline-none mb-2 md:mb-0 md:mr-2"
              placeholder="Enter your Email"
              type="text"
            />
            <button className="border-[#0DBC95] border-2 px-4 py-1 outline-none hover:bg-[#0DBC95] transition-all delay-75 bg-[#0DBC95] text-white">
              Send
            </button>
          </div>
        </nav>
        <nav className="flex flex-col md:pl-10 ">
          <header className="text-2xl underline  w-full text-[#0DBC95]">
            About Us
          </header>
          <a className="link cursor-pointer text-white">Our Story</a>
          <a className="link cursor-pointer text-white">Meet the Team</a>
          <a className="link cursor-pointer text-white">Our Approach</a>
          <a className="link cursor-pointer text-white">Community</a>
          <a className="link cursor-pointer text-white">Testimonials</a>
        </nav>
        <nav className="flex flex-col md:absolute lg:relative md:bottom-4 lg:bottom-auto lg:left-auto md:left-72">
          <header className="underline text-2xl text-[#0DBC95]">
            Services
          </header>
          <a className="link cursor-pointer text-white">Art Classes</a>
          <a className="link cursor-pointer text-white">Private Lessons</a>
          <a className="link cursor-pointer text-white">Art Supplies</a>
          <a className="link cursor-pointer text-white">Commissioned Artwork</a>
          <a className="link cursor-pointer text-white">Custom Portraits</a>
        </nav>
        <nav className="flex flex-col  md:absolute md:right-16 md:bottom-4">
          <header className="underline text-2xl text-[#0DBC95]">Events</header>
          <a className="link cursor-pointer text-white">Upcoming Exhibitions</a>
          <a className="link cursor-pointer text-white">Painting Workshops</a>
          <a className="link cursor-pointer text-white">Drawing Competitions</a>
          <a className="link cursor-pointer text-white">
            Art Fairs & Festivals
          </a>
          <a className="link cursor-pointer text-white">Community Events</a>
        </nav>
      </footer>
      <footer className="px-10 py-4 border-t bg-[#123841] text-base-content border-base-300">
        <div className="max-w-screen-xl mx-auto md:px-2">
          <div className="md:flex justify-between">
            <aside>
              <p>@2024 Brush Strokes. All Rights Reserved.</p>
            </aside>
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a href="" className="text-white">
                  Terms Of Services
                </a>
                <span>|</span>
                <a href="" className="text-white">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="" className="text-white">
                  Cookie Policy
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
