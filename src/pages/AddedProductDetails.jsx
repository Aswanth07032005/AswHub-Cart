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
import "./AddedProductDetails.css";
import { useSelector } from "react-redux";


function AddedProductDetails() {
  
    const {addedProducts} = useSelector((state)=>(state.productState))
 

  const { id } = useParams();

  
  
  const findAddItem = addedProducts.find((item) => item.id === Number(id));
 
  
  return (
    <Container className="mt-4">
     



    <Row className="mt-5 product-detail-card align-items-center">
  <Col md={4} className="text-center">
    <div className="product-img-wrapper">
      <Image
        className="product-img"
        src={findAddItem.images}
      />
    </div>
  </Col>

  <Col md={8}>
    <div className="product-info">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3 className="fw-bold">{findAddItem.name}</h3>
        </ListGroup.Item>

        <ListGroup.Item>
          <h5>
            Price :
            <span className="text-success ms-2">
              ₹{findAddItem.price}
            </span>
          </h5>
        </ListGroup.Item>

        <ListGroup.Item>
          <p className="text-muted">
            {findAddItem.description}
          </p>
        </ListGroup.Item>

        <ListGroup.Item>
          <p>
            Offer :
            <span className="text-danger ms-2">
              {findAddItem.offerPercent ?? "20%"}
            </span>
          </p>
        </ListGroup.Item>

        <ListGroup.Item>
          <h6>
            EMI :
            <span className="text-success ms-2">
              ₹{findAddItem?.emi ?? 4999}
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

    


 </Container>
  );
}

export default AddedProductDetails;
