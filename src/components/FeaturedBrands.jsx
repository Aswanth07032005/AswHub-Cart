import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./FeaturedBrands.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/productSlice";

function truncateString(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function FeaturedBrandes({ brands = [], search = "" }) {
  const dispatch = useDispatch();

  const filteredProducts = brands.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const AddToCart = (item, e) => {
    e.preventDefault();
    dispatch(addCartItems(item));
    toast.success("Item Added");
  };

  if (brands.length === 0) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center vh-100"
      >
        <Spinner animation="border" variant="danger" />
      </Container>
    );
  }

  return (
    <Container className="mt-4 mb-5">
      <Row className="mb-3">
        <Col className="text-center">
          <h2 className="fw-bold text-danger featured-text">
            Featured Brands
          </h2>
        </Col>
      </Row>

      <Row className="g-3">
        {filteredProducts.length === 0 ? (
          <h5 className="text-center text-danger mt-5">
            No Products Found
          </h5>
        ) : (
          filteredProducts.map((item) => (
            <Col key={item.id} xs={6} sm={4} md={3} lg={3}>
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

                  <Card.Body className="fk-body text-center">
                    <h6 className="fk-title">
                      {truncateString(item.title, 18)}
                    </h6>

                    <p className="fk-desc d-none d-sm-block">
                      {truncateString(item.contents, 40)}
                    </p>

                    {item.price && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={(e) => AddToCart(item, e)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default FeaturedBrandes;