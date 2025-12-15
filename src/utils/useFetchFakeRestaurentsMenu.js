import { useParams } from "react-router";
import { useEffect, useState } from "react";

const useFakeRestaurentsMenu = () => {
  const { resId } = useParams();

  const [fakeRestaurentMenu, setFakeRestaurentMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://fakerestaurantapi.runasp.net/api/Restaurant/${resId}/menu`
    );
    const json = await data.json();
    console.log(json);
    setFakeRestaurentMenu(json);
  };

  const RestaurentName = fakeRestaurentMenu[0]?.restaurantName;
  const RestaurentItems = fakeRestaurentMenu.length;

  return [fakeRestaurentMenu, RestaurentName, RestaurentItems];
};
export default useFakeRestaurentsMenu;
