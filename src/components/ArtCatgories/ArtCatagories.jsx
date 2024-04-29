import React, { useEffect, useState } from "react";

const ArtCatagories = () => {
  const [catagorey, setCatagorey] = useState([]);
  useEffect(() => {
    fetch("https://brushstoks.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagorey(data));
  }, []);
  return (
    <div className="mb-10">
      <div className="space-y-7 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mt-8 border-b-2 border-[#0DBC95] font-bold tracking-tight text-[#0DBC95]">
          Art Catagories
        </h1>
        <p className="w-[95%] md:w-[75%] mx-auto rale-way text-center ">
          Art categories encompass a vast spectrum, ranging from traditional
          mediums like painting and sculpture to contemporary forms like digital
          art and performance art. Each category offers a unique avenue for
          expression, inviting artists to explore diverse themes, techniques,
          and narratives
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {catagorey.map((item) => (
          <div
            key={item._id}
            className="hover:scale-95 transition-transform rounded-[6px]"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="card card-compact bg-base-100 border-2 rounded-[6px]  lg:auto shadow-xl "
            >
              <figure className="h-[210px] md:h-[180px]">
                <img className="w-full" src={item.image_url} alt="Oopps!" />
              </figure>
              <div className="card-body bg-[#123841] text-white">
                <h2 className="card-title  font-bold">
                  {item.subcategory_name}
                </h2>
                <p>{item.additional_info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCatagories;
