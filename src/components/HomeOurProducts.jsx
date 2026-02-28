import { Card, Col, Container, Row } from "react-bootstrap";
import "./HomeOurProducts.css";
import { Link } from "react-router-dom";

function truncateString(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

function HomeOurProducts({ brands = [] }) {
  const limitedProducts = brands.slice(12, 32);

  return (
    <Container className="mt-4 mb-5">
      <Row className="mb-3">
        <Col className="text-center">
          <h2 className="fw-bold text-danger featured-text">
            Featured Brands
          </h2>
        </Col>
      </Row>

      <Row className="g-2">
        {limitedProducts.map((item, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={3}>
            <Link
              to={`/home-product-details/${item.id}`}
              className="text-decoration-none text-dark"
            >
              <Card className="fk-card h-100">
                <div className="fk-img-box">
                  <Card.Img
                    src={item.images}
                    alt={item.title}
                    className="fk-img"
                  />
                </div>

                <Card.Body className="fk-body">
                  <h6 className="fk-title">
                    {truncateString(item.title, 18)}
                  </h6>

                  {/* tablet & desktop only */}
                  <p className="fk-desc d-none d-sm-block">
                    {truncateString(item.contents, 40)}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeOurProducts;