"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const RestaurentDetails = () => {
  const { resId } = useParams();
  console.log(resId);
  const [restaurentMenu, setRestaurentMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/swiggy/${resId}`);
    const json = await data.json();
    console.log(json);
    setRestaurentMenu(json.data);
  };

  //   const { name } = restaurentMenu?.cards[2]?.card?.card?.info;
  return (
    <>
      <h1>Name</h1>
    </>
  );
};
export default RestaurentDetails;
