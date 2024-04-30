import React from "react";

const PhotoGallery = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="space-y-7 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-5 mb-4 font-bold tracking-tight text-[#0DBC95] border-b-2 border-[#0DBC95] pb-2">
          Photo Gallery
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          src="https://img.freepik.com/premium-photo/portrait-gorgeous-female-artist-working-several-art-projects-her-studio_334177-135.jpg?w=360"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square"
        />
        <img
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-offset="200"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src="https://img.freepik.com/free-photo/close-up-oil-paints-brushes-palette_176420-2835.jpg?t=st=1714370065~exp=1714373665~hmac=54c6fda5d1a4841eaac8cfbf2ca3e7f560934944f67ec5df8943eab03d7ce835&w=740"
        />
        <img
          alt=""
          data-aos="fade-right"
          data-aos-duration="100"
          data-aos-offset="200"
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src="https://img.freepik.com/premium-photo/portrait-talented-young-woman-painting-picture-art-studio-with-inspiration_104603-4982.jpg?w=360"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-offset="200"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src="https://img.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg?t=st=1714370936~exp=1714374536~hmac=5a041447f22fb0ce8c4958db4bade6004bffa331d879ab7067022b566c7322c8&w=740"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src="https://img.freepik.com/premium-photo/paints-brushes-painting_200402-2920.jpg?w=360"
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
