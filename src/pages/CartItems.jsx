import { Button, Col, Container, Row, Image, Form } from "react-bootstrap";
import "./CartItems.css";
import { useDispatch, useSelector } from "react-redux";
import { minusButton, plusButton, removeButton } from "../redux/productSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CartItems() {
  const { cartItems } = useSelector((state) => state.productState);
  const dispatch = useDispatch();




  const minusItem = (item) => dispatch(minusButton(item));
  const plusItem = (item) => dispatch(plusButton(item));
  const removeItem = (item) => {
    dispatch(removeButton(item));
    toast.error("Item Removed");
  };

  // Discount & Total
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.discountPercentage || 0) * item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <Container fluid className="empty-cart-wrapper">
          <div className="empty-cart-box text-center">
            <Image src="/CartEmty.png" alt="Empty Cart" className="empty-cart-img" />
            <h3 className="fw-bold text-danger mt-3">Your cart is empty</h3>
            <p className="text-muted px-3">
              Looks like you haven’t added anything to your cart yet
            </p>
            <Button as={Link} to="/shope" variant="danger" className="empty-cart-btn">
              Continue Shopping
            </Button>
          </div>
        </Container>
      ) : (
        <Container className="cart-container min-vh-100">
          <Row className="mt-4">
            <Col className="text-center">
              <h2 className="fw-bolder text-danger">My Cart</h2>
            </Col>
          </Row>

          <Row className="mt-4 gy-4 cart-main-row">
            {/* Cart Items */}
            <Col lg={8} md={12}>
              <div className="cart-scroll-area">
                {cartItems.map((item, index) => (
                  <div className="cart-card mb-3" key={index}>
                    <div className="cart-left">
                      <Image src={item.images} className="cart-img " />

                      <div className="cart-details">
                        <h5>{item.title}</h5>
                        <p className="price text-danger">₹{item.price}</p>
                        {item.availabilityStatus && (
                          <p className="text-success">{item.availabilityStatus}</p>
                        )}
                        {item.discountPercentage && (
                          <p className="text-success">{item.discountPercentage}% OFF</p>
                        )}
                        {item.shippingInformation && <p>{item.shippingInformation}</p>}

                        <div className="qty-box mt-2">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            disabled={item.quantity <= 1}
                            onClick={() => minusItem(item)}
                          >
                            -
                          </Button>
                          <Form.Control
                            className="formCtrl-size text-center"
                            readOnly
                            value={item.quantity}
                          />
                          <Button variant="outline-danger" size="sm" onClick={() => plusItem(item)}>
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="cart-remove">
                      <Button variant="outline-danger" size="sm" onClick={() => removeItem(item)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Summary */}
            <Col lg={4} md={12} className="summary-col">
              <div className="summary-box sticky-summary h-100 d-flex flex-column">
                <h4 className="text-danger mb-3">Order Summary</h4>

                <p>
                  Subtotal <span>₹{totalPrice}</span>
                </p>
                <p>
                  Delivery <span className="text-success">Free</span>
                </p>
                <p>
                  Total Products <span>{cartItems.length}</span>
                </p>
                <p>
                  Discount <span className="text-success">{totalDiscount}%</span>
                </p>
                <hr />
                <h5>
                  Total <span>₹{totalPrice}</span>
                </h5>

                <Button variant="danger" className="checkout-btn mt-auto">
                  Proceed to Checkout
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default CartItems;