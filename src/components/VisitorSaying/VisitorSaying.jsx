import React from "react";

const VisitorSaying = () => {
  return (
    <section className="my-3  dark:text-gray-800 mb-7">
      <div className="container flex flex-col items-center mx-auto mb-2 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold border-b-2 border-[#0DBC95] text-[#0DBC95] leading-none text-center text-bold">
          Our Visitor Feedback
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-3 lg:grid-cols-4 ">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="flex flex-col  mx-4  "
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-2 md:px-3 dark:bg-gray-50">
            <p className="relative px-1 py-1 text-md italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-[#123841]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I was really impressed by the exceptional customer service
              provided by your team. They were prompt, courteous, and went above
              and beyond to ensure my needs were met. I'll definitely be
              recommending your company to others!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#123841]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#123841] dark:text-gray-50">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">ALIYA VAT</p>
            <p className="text-sm uppercase">Artist</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="flex flex-col  mx-4  "
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-2 md:px-3 dark:bg-gray-50">
            <p className="relative px-1 py-1 text-md italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-[#123841]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Your products exceeded my expectations! The quality is outstanding
              and I can tell that a lot of care went into their production. I've
              tried similar products from other companies, but yours are
              definitely superior. Keep up the great work!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#123841]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#123841] dark:text-gray-50">
            <img
              src="https://pyxis.nymag.com/v1/imgs/c97/e27/7e86fed4703011f8bf951fbc01bc5b7e15-Rege--Jean-Page.rhorizontal.w700.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">ARYAN ISLAM</p>
            <p className="text-sm uppercase">Cite Engineer</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="flex flex-col  mx-4  "
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-2 md:px-3 dark:bg-gray-50">
            <p className="relative px-1 py-1 text-md italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-[#123841]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I couldn't be happier with my experience with your company. From
              start to finish, everything was seamless. Your products are
              fantastic, your customer service is excellent, and your website is
              a joy to use. I'll be a loyal customer for life
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#123841]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#123841] dark:text-gray-50">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIIz5-yW1k0be5lYAhimSCVss7bdJgtc2lh_ff67asDSIxigEJ6=s288-c-no"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">MASUM BILLAH</p>
            <p className="text-sm uppercase"> Web Developer</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="flex flex-col  mx-4  "
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-2 md:px-3 dark:bg-gray-50">
            <p className="relative px-1 py-1 text-md italic text-center dark:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-[#123841]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Navigating your website was a breeze! It's so user-friendly and
              well-designed. I found exactly what I was looking for quickly and
              easily. Plus, the checkout process was smooth and hassle-free. A
              top-notch online shopping experience!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#123841]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#123841] dark:text-gray-50">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">ABDUR RAHIM</p>
            <p className="text-sm uppercase">Softwore Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorSaying;
