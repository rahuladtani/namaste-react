"use client";
import { Col, Container, Row } from "react-bootstrap";
import FakeRestaurentCards from "./FakeRestaurentCard";
import { useEffect, useState } from "react";

const FakeRestaurents = () => {
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
                <FakeRestaurentCards restaurent={restaurent} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FakeRestaurents;
