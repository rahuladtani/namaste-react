import FakeRestaurentCards from "./FakeRestaurentCard";

const FakeRestaurentCardWithParkingLabel = (FakeRestaurentCards) => {
  return (props) => {
    return (
      <>
        <div className="position-relative">
          <small className="parking-label">Parking Space: Available</small>
          <FakeRestaurentCards {...props} />
        </div>
      </>
    );
  };
};

export default FakeRestaurentCardWithParkingLabel;
