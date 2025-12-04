import SearchBar from "./SearchBar";
import Restaurants from "./Restaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You're offline, please check your internet connection!</h1>;

  return (
    <>
      {/* <SearchBar /> */}
      <Restaurants />
    </>
  );
};

export default Body;
