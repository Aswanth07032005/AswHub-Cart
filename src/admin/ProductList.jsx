import { Container, Row, Col, Button, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeProduct } from "../redux/productSlice";

function ProductList() {
  const { addedProducts } = useSelector((state) => state.productState);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  const [removeName, setRemoveName] = useState("");

  const handleClose = () => {
    setShow(false);
    setRemoveId(null);
    setRemoveName("");
  };

  const handleDelete = () => {
    
    
    dispatch(removeProduct(removeId));
    handleClose();
  };

  const handleRemoveProduct = (id, name) => {
    setRemoveId(id);
    setRemoveName(name);
    setShow(true);
  };

  return (
    <Container fluid className="fk-list-container">
      <h4 className="fk-heading">Products List</h4>

      {addedProducts.length === 0 ? (
        <div className="fk-empty">No products added yet</div>
      ) : (
        addedProducts.map((item) => (
          <div key={item.id} className="fk-row-card">
            <Row className="align-items-center">

            
              <Col lg={2} md={3} sm={4} xs={12} className="text-center mb-2 mb-md-0">
                <Image src={item.images} className="fk-row-img" />
              </Col>

            
              <Col lg={6} md={5} sm={8} xs={12}>
                <h6 className="fk-title">{item.name}</h6>
                <p className="fk-desc">{item.description}</p>
                <span className="fk-price">₹{item.price}</span>
              </Col>

            
              <Col lg={2} md={2} sm={6} xs={6} className="mt-2 mt-md-0">
                <span className="fw-bolder">Category:</span> {item.category}
              </Col>

             
              <Col lg={2} md={2} sm={6} xs={6} className="text-end mt-2 mt-md-0">
                <Link to={`/edit-poroduct/${item.id}`}>
                  <Button variant="primary" size="sm" className="me-2">
                    <FaEdit /> Edit
                  </Button>
                </Link>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveProduct(item.id, item.name)}
                >
                  <FaTrash /> Delete
                </Button>
              </Col>

            </Row>
          </div>
        ))
      )}

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Delete Product?</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <p className="mb-2">
            Are you sure you want to delete{" "}
            <strong>{removeName}</strong>?
          </p>
          
        </Modal.Body>

        <Modal.Footer className="justify-content-between">
          <Button variant="outline-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductList;