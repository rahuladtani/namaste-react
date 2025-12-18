"use client";
import { Col, Container, Row } from "react-bootstrap";
import FakeRestaurentCards from "./FakeRestaurentCard";
import useFetchFakeRestaurents from "../utils/useFetchFakeRestaurents";
import FakeRestaurentCardWithParkingLabel from "./FakeRestaurentCardWithParkingLabel";
import { useEffect, useState } from "react";

const FakeRestaurents = () => {
  const [
    fakeRestaurents = [],
    filterFakeRestaurents = [],
    setFilterFakeRestaurents,
  ] = useFetchFakeRestaurents();
  const WithParkingLabel =
    FakeRestaurentCardWithParkingLabel(FakeRestaurentCards);

  const [searchByType, setSearchByType] = useState("");

  const filterData = fakeRestaurents.filter((res) => res.type === searchByType);

  const handleClear = () => {
    setFilterFakeRestaurents(fakeRestaurents);
    setSearchByType("");
  };

  return (
    <>
      <section className="fake-restaurents py-4">
        <Container>
          <Row className="mb-4 g-4">
            <Col lg={8}>
              <h3 className="mb-0">Fake Restaurents</h3>
            </Col>
            <Col lg={4}>
              <div className="d-flex gap-2">
                <select
                  className="form-select"
                  value={searchByType}
                  onChange={(e) => setSearchByType(e.target.value)}
                >
                  <option>Search by Type</option>
                  {[...new Set(fakeRestaurents.map((r) => r.type))].map(
                    (type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    )
                  )}
                </select>
                <button
                  className="btn btn-primary"
                  onClick={() => setFilterFakeRestaurents(filterData)}
                >
                  Search
                </button>
                {searchByType && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClear()}
                  >
                    Clear
                  </button>
                )}
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            {filterFakeRestaurents.map((restaurent) => (
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
