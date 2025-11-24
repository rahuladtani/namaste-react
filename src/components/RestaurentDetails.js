"use client";
import { useState, useEffect } from "react";

const RestaurentDetails = () => {
  const [restaurentMenu, setRestaurentMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2913247&lng=77.3359114&restaurantId=695745"
    );
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
