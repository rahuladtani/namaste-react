import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import RestaurentItem from "./RestaurentItem";
import ResList from "../utils/restaurents";
import { useState, useEffect } from "react";
import RestaurentSkeleton from "./RestaurentSkeleton";

const Restaurants = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
