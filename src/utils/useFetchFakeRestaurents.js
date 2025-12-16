import { useEffect, useState } from "react";

const useFetchFakeRestaurents = () => {
  const [fakeRestaurents, setFakeRestaurents] = useState([]);
  const [filterFakeRestaurents, setFilterFakeRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://fakerestaurantapi.runasp.net/api/Restaurant"
    );
    const json = await data.json();
    console.log(json);
    setFakeRestaurents(json);
    setFilterFakeRestaurents(json);
  };
  return [fakeRestaurents, filterFakeRestaurents, setFilterFakeRestaurents];
};
export default useFetchFakeRestaurents;
