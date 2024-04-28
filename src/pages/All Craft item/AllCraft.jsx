import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtCraftItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the database using Axios
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-[90%] mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6 text-[#0DBC95]">
        All Art & Craft Items
      </h1>
      <table className="w-full border-collapse">
        <thead className="bg-[#F0F4F8]">
          <tr>
            <th className="py-2 px-4">Item Name</th>
            <th className="py-2 px-4">Subcategory_Name</th>
            <th className="py-2 px-4">Processing_time</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id} className="border-b">
              <td className="py-3 px-4 text-center ">{item?.ItemName}</td>
              <td className="py-3 px-4 text-center">{item?.processing_time}</td>
              <td className="py-3 px-4 text-center">{item?.subcategoryName}</td>
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
  );
};

export default AllArtCraftItems;
