import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCraftCard from "./../../components/MyCraftCard/MyCraftCard";

const MyArt = () => {
  const [myItems, setMyItems] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const param = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/items-by-email/${param.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    // Sort myItems based on the selected option
    let sortedItems = [...myItems];
    if (value === "yes") {
      sortedItems.sort((a, b) => (b.customization > a.customization ? 1 : -1));
    } else if (value === "no") {
      sortedItems.sort((a, b) => (b.customization < a.customization ? 1 : -1));
    }
    setMyItems(sortedItems);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-9">
        <select
          onChange={handleChange}
          className="select flex outline-none focus:outline-none border-[#0DBC95] focus:border-[#0DBC95]  select-info w-full max-w-[200px]"
          defaultValue={sortOption}
        >
          <option disabled value="">
            Customization
          </option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 w-[85%] mx-auto">
        {myItems.map((item) => (
          <MyCraftCard
            item={item}
            myItems={myItems}
            setMyItems={setMyItems}
            key={item._id} // Assuming _id is a unique identifier for the item
          />
        ))}
      </div>
    </>
  );
};

export default MyArt;
