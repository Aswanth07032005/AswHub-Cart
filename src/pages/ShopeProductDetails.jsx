import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ShopeProductDetails({brands}) {
  const { product } = useSelector((state) => state.productState);
  const { id } = useParams();

  const findShopeProduct = product.find(
    (item) => item.id === Number(id)
  );

  if (!findShopeProduct) {
    return (
      <Container className="text-center mt-5">
        <h4>Loading product...</h4>
      </Container>
    );
  }


 


  return (
    <Container>
      <Row>
        <Col className="text-center text-danger mt-2">
          <h2 className="fw-bold">Product Overview</h2>
        </Col>
      </Row>

       <Row className="mt-4 p-4 shadow rounded align-items-center bg-white">
        <Col md={4} className="text-center mb-3 mb-md-0">
          <Image
            src={findShopeProduct?.images}
            className="img-fluid rounded"
            alt={findShopeProduct.title}
          />
        </Col>

        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="fw-bold">{findShopeProduct.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>
                Price :
                <span className="text-success ms-2">
                  ₹{findShopeProduct.price}
                </span>
              </h5>
            </ListGroup.Item>

            <ListGroup.Item>
              <p className="text-muted">{findShopeProduct.description}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              Rating :
              <span className="text-success ms-2">
                {findShopeProduct.rating}
              </span>
            </ListGroup.Item>

            <ListGroup.Item>
              Stock :
              <span className="ms-2">
                {findShopeProduct.minimumOrderQuantity}
              </span>
            </ListGroup.Item>

            <ListGroup.Item>
              Warranty : {findShopeProduct.warrantyInformation}
            </ListGroup.Item>

            <ListGroup.Item>
              Shipping : {findShopeProduct.shippingInformation}
            </ListGroup.Item>

            <ListGroup.Item>
              Offer :
              <span className="text-danger ms-2">
                {findShopeProduct.discountPercentage}%
              </span>
            </ListGroup.Item>

            <ListGroup.Item>
              Return Policy : {findShopeProduct.returnPolicy}
            </ListGroup.Item>
          </ListGroup>

          <div className="d-flex gap-3 mt-4 flex-wrap">
            <Button variant="danger">Buy Now</Button>
            <Button variant="outline-dark">Add to Cart</Button>
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

export default ShopeProductDetails;