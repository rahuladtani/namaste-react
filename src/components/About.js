import { Col, Container, Row } from "react-bootstrap";
import TeamCardUsingClassComponent from "./TeamCardUsingClassComponent";

const About = () => {
  return (
    <section className="about py-4">
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Team Members</h3>
          </Col>
          <Col lg={4}>
            <TeamCardUsingClassComponent
              name="Rahul Adtani"
              location="Bhopal"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
