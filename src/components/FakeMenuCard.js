import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useLocation } from "react-router";

const FakeMenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const url = useLocation();

  return (
    <>
      <div className="card fake-res-card">
        <img src={item.imageUrl} />
        <div className="card-body">
          <h5 className="mb-1">{item.itemName}</h5>
          <p className="mb-1">{item.itemDescription}</p>
          <div className="d-flex align-items-center justify-content-between">
            <p className="badge bg-secondary m-0">Rs.{item.itemPrice}</p>
            {url.pathname !== "/cart" ? (
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleAddItem(item)}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveItem(item)}
              >
                Remove Item
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FakeMenuCard;
