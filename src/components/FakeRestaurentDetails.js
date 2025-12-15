import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FakeMenuCard from "./FakeMenuCard";
import useFakeRestaurentsMenu from "../utils/useFetchFakeRestaurentsMenu";

const FakeRestaurentDetails = () => {
  const [fakeRestaurentMenu, RestaurentName, RestaurentItems] =
    useFakeRestaurentsMenu();
  return (
    <>
      <section className="fake-res-details py-4">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center mb-4">
                {RestaurentName || "Loading..."} - {RestaurentItems} Items
              </h3>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            {fakeRestaurentMenu.map((item) => (
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

export default FakeRestaurentDetails;
