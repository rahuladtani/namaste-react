import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const SearchBar = () => {
  return (
    <section className="searchbar py-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <div className="d-flex gap-3">
              <input
                type="text"
                placeholder="search"
                className="form-control"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchBar;
