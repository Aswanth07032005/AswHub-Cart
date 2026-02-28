import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdCheckbox, IoMdLock } from "react-icons/io";
import { PiTruckFill } from "react-icons/pi";
import { loginUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRef, useEffect } from "react";

function Login() {
  const { users, isAuthentication } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null);

 
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid Email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Enter minimum 6 characters")
      .required("Password is required"),
  });

  const handelLogin = (values) => {
   
    const findUser = users.find((item) => item.email === values.email);

   
    if (!findUser) {
      toast.error("Your Email is Invalid");
      emailRef.current.focus();
      return;
    }

    if (findUser.password !== values.password) {
      toast.error("Your Password is Incorrect");
      return;
    }
    if (findUser.status !== true) {
       toast.error("Account Deactivated Admin")
       return
    }

    dispatch(loginUser(values));
    toast.success("Login Successfully");
    navigate("/");
  };

  if (isAuthentication) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="login-card-flip">
        <Row className="g-0 h-100">
          <Col md={5} className="flip-left text-light">
            <Image src="/public/WhiteLogof.png" className="aswhub-logo mb-4" />
            <h3 className="fw-bold">Login</h3>
            <p className="mt-3 small">
              Get access to your Orders, Wishlist and Recommendations
            </p>

            <ul className="list-unstyled mt-4 small">
              <li><IoMdCheckbox /> Premium Quality Products</li>
              <li><IoMdLock /> Safe & Secure Payments</li>
              <li><PiTruckFill /> Fast & Reliable Delivery</li>
            </ul>
          </Col>

          <Col md={7} className="flip-right">
            <div className="p-5">
              <h5 className="fw-bold mb-4 text-center">
                Login to your account
              </h5>

              <Formik
                validationSchema={schema}
                onSubmit={handelLogin}
                initialValues={{ email: "", password: "" }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="email"
                        name="email"
                        ref={emailRef}
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" className="danger-btn w-100">
                      Login
                    </Button>

                    <p className="text-center mt-4 mb-0 small">
                      New to AswHub?
                      <Link to="/Register" className="danger-link">
                        {" "}Create an account
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;