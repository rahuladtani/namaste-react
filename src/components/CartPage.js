import { useDispatch, useSelector } from "react-redux";
import FakeMenuCard from "./FakeMenuCard";
import { Container, Row, Col } from "react-bootstrap";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <section className="fake-res-details py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <h3 className="text-center mb-4">Cart</h3>
              <button
                className="mb-4 btn btn-primary btn-sm"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            {cartItems.map((item) => (
              <Col lg={3} key={item.itemID}>
                <FakeMenuCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default CartPage;
