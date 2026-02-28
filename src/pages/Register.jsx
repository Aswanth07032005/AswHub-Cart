import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./Register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdCheckbox, IoMdLock } from "react-icons/io";
import { PiTruckFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

function Register() {

  const {isAuthentication} = useSelector((state)=>(state.userState))

const dispatch = useDispatch()
const navigate = useNavigate()
const nameRef = useRef(null)

useEffect(()=>{
  nameRef.current.focus()
},[])

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter valid Email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Enter minimum 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleRegister = (values) => {
    values.id = Date.now()
    values.role = "User"
    values.status = true
    values.image = "data:image/png;base64,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"
   dispatch(registerUser(values))
   toast.success("Account registered successfully!")
   navigate("/login")
  };

  return (
    <>
    {isAuthentication ? (
      <Navigate to={"/"}/>
    ):(
      <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
  <div className="login-card-flip">
    <Row className="g-0 h-100">

      {/* LEFT SIDE */}
      <Col md={5} className="flip-left text-light">
        <Image src="/public/WhiteLogof.png" className="aswhub-logo mb-4" />

        <h3 className="fw-bold">Register</h3>
        <p className="mt-3 small">
          Create your account to enjoy premium shopping experience
        </p>

        <ul className="list-unstyled mt-4 small">
          <li className="mb-2"><IoMdCheckbox /> Premium Products</li>
          <li className="mb-2"><IoMdLock /> Secure Payments</li>
          <li className="mb-2"><PiTruckFill /> Fast Delivery</li>
        </ul>
      </Col>

      {/* RIGHT SIDE */}
      <Col md={7} className="flip-right">
        <div className="p-5">
          <h5 className="fw-bold mb-4 text-center">Create your account</h5>

          <Formik
            validationSchema={schema}
            onSubmit={handleRegister}
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
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

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    ref={nameRef}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.confirmPassword &&
                      !!errors.confirmPassword
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="danger-btn w-100">
                  Register
                </Button>

                <p className="text-center mt-4 mb-0 small">
                  Already have an account?
                  <Link to="/login" className="danger-link">
                    {" "}Login
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
    )}
    </>
  );
}

export default Register;