import { useEffect, useState } from "react";

const useFetchFakeRestaurents = () => {
  const [fakeRestaurents, setFakeRestaurents] = useState([]);
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
  };
  return fakeRestaurents;
};
export default useFetchFakeRestaurents;
