import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import RestaurentItem from "./RestaurentItem";
import ResList from "../utils/restaurents";
import { useState, useEffect } from "react";
import RestaurentSkeleton from "./RestaurentSkeleton";
import useFetchRestaurents from "../utils/useFetchRestaurents";

const Restaurants = () => {
  const [
    listOfRestaurents = [],
    filteredRestaurents = [],
    setFilteredRestaurents,
  ] = useFetchRestaurents();

  const topRatedRestaurents = listOfRestaurents.filter(
    (res) => res.info.avgRating > 4
  );

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {listOfRestaurents.length === 0 ? (
        <RestaurentSkeleton />
      ) : (
        <section className="restaurents pb-5">
          <Container>
            <Row className="g-3 my-4">
              <Col lg="4">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Col>
              <Col lg="2">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    const filterData = listOfRestaurents.filter((res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    );
                    setFilteredRestaurents(filterData);
                  }}
                >
                  Search
                </button>
              </Col>
              <Col lg="3">
                <button
                  className="btn btn-primary"
                  onClick={() => setFilteredRestaurents(topRatedRestaurents)}
                >
                  Top Rated Restaurents
                </button>
              </Col>
            </Row>

            <Row className="g-4">
              {filteredRestaurents.map((restaurent) => (
                <Col lg={3} key={restaurent.info.id}>
                  <RestaurentItem restaurent={restaurent} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Restaurants;
