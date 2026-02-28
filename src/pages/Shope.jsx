import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItems } from "../redux/productSlice";
import "./Shope.css";
import { toast } from "react-toastify";


function Shope() {
  const dispatch = useDispatch();
 
 
 const { product } = useSelector((state) => state.productState);

  const truncateString = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text;
  };

  const AddToCart = (item) => {
  
    dispatch(addCartItems(item));
     toast.success("Item Added");
  };
  

  return (
    <>
    {product.length === 0 ? (
        <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Spinner animation="border" variant="danger" />
    </Container>
    ):(
      <Container className="my-4">
      <Row>
        <Col className="text-center text-danger">
          <h2 className="fw-bold">Explore Products</h2>
        </Col>
      </Row>

      <Row className="mt-3">
        {product.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card">
              <Link to={`/shope-product-details/${item.id}`}>
                <Card.Img
                  src={item.images?.[0]}
                  className="product-img"
                />
              </Link>

              <Card.Body className="text-center">
                <h6 className="product-title">
                  {truncateString(item.title, 22)}
                </h6>

                <p className="product-price">
                  ₹ {item.price}
                </p>
                 <p className="description-shope d-none d-sm-block">
                    {truncateString(item.description, 40)}
                  </p>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => AddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )}
    </>
  );
}

export default Shope;