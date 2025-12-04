import { useState, useEffect } from "react";

const useFetchRestaurents = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    setListOfRestaurents(restaurants);
    setFilteredRestaurents(restaurants);
  };
  return [listOfRestaurents, filteredRestaurents, setFilteredRestaurents];
};

export default useFetchRestaurents;
