import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="max-h-[calc(100vh-100px)] w-full"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-girl-being-creative-home_23-2149065968.jpg?t=st=1714349390~exp=1714352990~hmac=f7fa954a4f6f540d97e2755ff86afddb6c89419b4459c5e9ace771c86ef915e2&w=740"
            alt="Slide 1"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center"></div>
          <div className="absolute -top-16 md:top-0 left-5 md:left-10 lg:left-48 w-[90%] md:w-[65%] h-full flex justify-center items-center">
            <div className="text-white text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Unleash Your Creativity
              </h1>
              <p>
                Discover the joy of expression through art. Whether you're a
                seasoned artist or just starting out, our platform offers a
                vibrant community and endless inspiration to help you explore
                your artistic potential
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div>
            <img
              src="https://img.freepik.com/premium-photo/professional-makeup-brushes-tools-generative-ai_220873-23314.jpg?w=740"
              style={{ width: "100%", height: "500px" }}
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center"></div>
          <div className="absolute -top-16 md:top-0 left-5 md:left-10 lg:left-48 w-[90%] md:w-[65%] h-full flex justify-center items-center">
            <div className="text-white text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Explore the World of Drawing
              </h1>
              <p>
                Dive into the captivating world of drawing and let your
                imagination soar. From intricate sketches to bold illustrations,
                our platform provides resources, tutorials, and a supportive
                community to help you hone your skills and create stunning
                artwork.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div>
            <img
              src="https://img.freepik.com/premium-photo/midsection-person-holding-painting-table_1048944-23325531.jpg?w=740 "
              alt="Slide 3"
              style={{ height: "500px", objectFit: "cover" }}
              className="w-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center"></div>
          <div className="absolute -top-16 md:top-0 left-5 md:left-10 lg:left-48 w-[90%] md:w-[65%] h-full flex justify-center items-center">
            <div className="text-white text-center space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Embrace the Beauty of Artistry
              </h1>
              <p>
                Experience the magic of artistry and discover the power of
                visual storytelling. Whether you're passionate about painting,
                sketching, or digital art
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
