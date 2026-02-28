import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./HomeProductDetail.css";


function HomeProductDetails({ brands }) {
  
  

  const { id } = useParams();

  const findProduct = brands.find((item) => item.id === Number(id));

  
  return (
    <Container className="mt-4">
      <Row className="mt-4">
        <Col className="text-center">
          <h2 className="fw-bolder  text-danger ">Premium Product Overview</h2>
        </Col>
      </Row>



    <Row className="mt-5 product-detail-card align-items-center">
  <Col md={4} className="text-center">
    <div className="product-img-wrapper">
      <Image
        className="product-img"
        src={findProduct.images}
      />
    </div>
  </Col>

  <Col md={8}>
    <div className="product-info">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3 className="fw-bold">{findProduct.title}</h3>
        </ListGroup.Item>

        <ListGroup.Item>
          <h5>
            Price :
            <span className="text-success ms-2">
              ₹{findProduct.price}
            </span>
          </h5>
        </ListGroup.Item>

        <ListGroup.Item>
          <p className="text-muted">
            {findProduct.contents}
          </p>
        </ListGroup.Item>

        <ListGroup.Item>
          <p>
            Offer :
            <span className="text-danger ms-2">
              {findProduct.offerPercent}%
            </span>
          </p>
        </ListGroup.Item>

        <ListGroup.Item>
          <h6>
            EMI :
            <span className="text-success ms-2">
              {findProduct.emi}
            </span>
          </h6>
        </ListGroup.Item>
      </ListGroup>

   
      <div className="d-flex gap-3 mt-4 flex-wrap">
        <Button variant="danger">Buy Now</Button>
        <Button variant="outline-dark">Add to Cart</Button>
      </div>
    </div>
  </Col>
</Row>

      <Row className="mt-4">
        <Col className="text-center">
          <h3 className="fw-bolder  text-danger "> Recommended for You</h3>
        </Col>
      </Row>



 {brands.map((item,index) => (
  <Row
    key={index}
    className="more-contents align-items-center mx-2 mx-md-5 my-4"
  >
    {/* IMAGE */}
    <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
      <div className="more-img-wrapper">
        <Image
          src={item.images}
          alt={item.title}
          className="more-img img-fluid"
        />
      </div>
    </Col>

    {/* CONTENT */}
    <Col xs={12} md={9}>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          <ListGroup.Item className="px-0 border-0">
            <h5 className="product-title text-truncate">
              {item.title}
            </h5>
          </ListGroup.Item>

          <ListGroup.Item className="px-0 border-0">
            <h6 className="product-price mb-1">
              Price :
              <span className="text-success ms-2 fw-bold">
                ₹{item.price}
              </span>
            </h6>
          </ListGroup.Item>

          <ListGroup.Item className="px-0 border-0">
            <p className="product-offer mb-0">
              Offer :
              <span className="text-danger ms-2 fw-semibold">
                {item.offerPercent}%
              </span>
            </p>
          </ListGroup.Item>
        </ListGroup>

        {/* BUTTONS */}
        <div className="button-group mt-4">
          <Button variant="danger" className="action-btn">
            Add to Cart
          </Button>

          <Link to={`/home-product-details/${item.id}`} className="details-link">
            <Button
              variant="outline-dark"
              className="action-btn"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              View Details
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Col>
  </Row>
))}
    </Container>
  );
}

export default HomeProductDetails;
