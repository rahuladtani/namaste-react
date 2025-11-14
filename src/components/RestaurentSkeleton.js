import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const RestaurentSkeleton = () => {
  return (
    <>
      <section className="restaurents restaurents-skeleton  pb-5">
        <Container>
          <div className="btn my-4"></div>
          <Row className="g-4">
            <Col lg={3}>
              <Card>
                <div className="img"></div>
                <Card.Body>
                  <div className="card-title"></div>
                  <div className="p"></div>
                  <div className="p"></div>
                  <div className="p"></div>
                  <div className="p"></div>
                  <div className="btn w-100"></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default RestaurentSkeleton;
