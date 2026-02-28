import { Col, Container, Image, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="about-page my-5">

      {/* Heading */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="fw-bold text-danger">About AswHub</h2>
          <p className="about-sub">
            Your trusted online shopping destination
          </p>
        </Col>
      </Row>

      {/* Intro Card */}
      <Row className="justify-content-center mb-5">
        <Col md={10}>
          <div className="about-card">
            <p className="about-text">
              AswHub is a modern e-commerce platform built to deliver a smooth,
              secure, and user-friendly shopping experience. We bring together
              quality products, affordable pricing, and trusted service in one
              powerful marketplace. Every product is carefully selected to
              ensure value, reliability, and customer satisfaction.
            </p>
          </div>
        </Col>
      </Row>

      {/* Section 1 */}
      <Row className="about-section align-items-center mb-5">
        <Col md={6}>
          <Image src="/aboutpng.png" className="section-img" />
        </Col>
        <Col md={6}>
          <div className="section-content">
            <Image src="/Logo.png" className="mini-logo" />
            <p className="about-text">
              AswHub is designed with simplicity and performance in mind. Our
              platform offers fast loading, mobile-friendly design, and secure
              payment options to make shopping effortless and enjoyable.
            </p>
          </div>
        </Col>
      </Row>

      {/* Section 2 */}
      <Row className="about-section align-items-center mb-5 flex-md-row-reverse">
        <Col md={6}>
          <Image src="/aboutDress.png" className="section-img" />
        </Col>
        <Col md={6}>
          <div className="section-content">
            <Image src="/Logo.png" className="mini-logo" />
            <p className="about-text">
              Discover trendy and stylish fashion collections at AswHub. Our
              dresses combine comfort, modern design, and affordability – perfect
              for daily wear and special occasions.
            </p>
          </div>
        </Col>
      </Row>

      {/* Section 3 */}
      <Row className="about-section align-items-center">
        <Col md={6}>
          <Image src="/Icone.png" className="section-img" />
        </Col>
        <Col md={6}>
          <div className="section-content">
            <Image src="/Logo.png" className="mini-logo" />
            <p className="about-text">
              AswHub is more than an online store — it is a growing digital
              marketplace built with trust, technology, and passion. We aim to
              make fashion and lifestyle shopping accessible for everyone.
            </p>
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default About;