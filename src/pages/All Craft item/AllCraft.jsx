import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllArtCraftItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://brushstoks.vercel.app/items")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Helmet>
        <title>Brush strokes-all_art</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-6 text-[#0DBC95]">
        All Art Items
      </h1>
      {loading ? (
        <div className="flex items-center justify-center h-[500px] space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-[#F0F4F9]">
              <tr>
                <th className="py-2 px-4">Item Name</th>
                <th className="py-2 px-4">Subcategory Name</th>
                <th className="py-2 px-4">Processing Time</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : " bg-gray-100"
                  } border-b`}
                >
                  <td className="py-3 px-4 text-center">{item?.ItemName}</td>
                  <td className="py-3 px-4 text-center">
                    {item?.subcategoryName}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item?.processing_time}
                  </td>
                  <td className="py-3 px-4 text-center">{item?.price}</td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      to={`/art&craft_details/${item._id}`}
                      className="text-[#0DBC95] hover:text-[#0D8E6E] hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllArtCraftItems;
