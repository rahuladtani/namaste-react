"use client";
import { Col, Container, Row } from "react-bootstrap";
import FakeRestaurentCards from "./FakeRestaurentCard";
import useFetchFakeRestaurents from "../utils/useFetchFakeRestaurents";
import FakeRestaurentCardWithParkingLabel from "./FakeRestaurentCardWithParkingLabel";

const FakeRestaurents = () => {
  const fakeRestaurents = useFetchFakeRestaurents();

  const WithParkingLabel =
    FakeRestaurentCardWithParkingLabel(FakeRestaurentCards);

  return (
    <>
      <section className="fake-restaurents py-4">
        <Container>
          <Row>
            <Col>
              <h3 className="mb-4">Fake Restaurents</h3>
            </Col>
          </Row>
          <Row className="g-3">
            {fakeRestaurents.map((restaurent) => (
              <Col lg={3} key={restaurent.restaurantID}>
                {restaurent.parkingLot ? (
                  <WithParkingLabel restaurent={restaurent} />
                ) : (
                  <FakeRestaurentCards restaurent={restaurent} />
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FakeRestaurents;
