import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./AddedProductsItems.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../redux/productSlice";
import { toast } from "react-toastify";

function truncateString(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

function AddedProductsItems() {

    const dispatch = useDispatch()

 const {addedProducts} = useSelector((state)=>(state.productState))
 
  const AddToCart = (value) =>{
    dispatch(addCartItems(value))
     toast.success("Item Added");
  }

  return (
    <Container className=" mb-5">
       <Row className="mt-4">
        <Col className="text-center">
          <h3 className="fw-bolder  text-danger "> Recommended Brands</h3>
        </Col>
      </Row>


      <Row className="g-2">
        {addedProducts.map((item,index) => (
          <Col key={index} xs={3} sm={3} md={4} lg={3}>
            <Link
              to={`/added-product-details/${item.id}`}
              className="text-decoration-none"
            >
              <Card className="fk-card h-100">
                <div className="fk-img-box">
                  <Card.Img
                    src={item.images}
                    alt={item.name}
                    className="fk-img"
                  />
                </div>

                <Card.Body className="fk-body">
                  <h6 className="fk-title">{truncateString(item.name, 18)}</h6>

                  {/* desktop & tablet only */}
                  <p className="fk-desc d-none d-sm-block">
                    {truncateString(item.description,20)}
                  </p>
                  <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              AddToCart(item);
                            }}
                          >
                            Add to Cart
                          </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default AddedProductsItems;
