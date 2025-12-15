import { Link } from "react-router";

const FakeMenuCard = ({ item }) => {
  return (
    <>
      <Link to="#" className="card fake-res-card">
        <img src={item.imageUrl} />
        <div className="card-body">
          <h5 className="mb-1">{item.itemName}</h5>
          <p className="mb-1">{item.itemDescription}</p>
          <p className="badge bg-secondary m-0">Rs.{item.itemPrice}</p>
        </div>
      </Link>
    </>
  );
};

export default FakeMenuCard;
