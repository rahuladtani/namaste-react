import { Link } from "react-router";

const FakeRestaurentCards = ({ restaurent }) => {
  return (
    <>
      <Link
        to={`/fakerestaurentdetails/${restaurent.restaurantID}`}
        className="card fake-res-card"
      >
        <div className="card-body">
          <h5 className="mb-1">{restaurent.restaurantName}</h5>
          <p className="mb-1">{restaurent.address}</p>
          <p className="badge bg-secondary m-0">{restaurent.type}</p>
        </div>
      </Link>
    </>
  );
};
export default FakeRestaurentCards;
