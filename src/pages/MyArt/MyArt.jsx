import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCraftCard from "./../../components/MyCraftCard/MyCraftCard";

const MyArt = () => {
  const [myItems, setMyItems] = useState([]);

  const param = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/items-by-email/${param.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 w-[85%] mx-auto">
      {myItems.map((item) => (
        <MyCraftCard
          item={item}
          myItems={myItems}
          setMyItems={setMyItems}
          key={Math.random()}
        ></MyCraftCard>
      ))}
    </div>
  );
};

export default MyArt;
