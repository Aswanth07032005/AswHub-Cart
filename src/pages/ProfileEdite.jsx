import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "./ProfileEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../redux/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ഇത് install ചെയ്യണം
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userState);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const findUser = users?.find((item) => item.id === Number(id));

  
  

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone is required"),
    dob: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
      .required("Pincode is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values) => {
    
    const {...userData } = values;
    userData.lastUpdated = new Date().toLocaleString();
    userData.id = Number(id);
    
    
    userData.avatar = imagePreview || findUser?.avatar || "https://via.placeholder.com/180";

    dispatch(updateUser(userData));
   toast.success("Profile updated successfully!");
    navigate(`/`)
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const leftSideImageSrc = imagePreview || findUser?.avatar || "https://via.placeholder.com/180";

  return (
    <Container className="profile-edit-page">
      <Row className="profile-edit-card">
        {/* LEFT SIDE - PROFILE INFO ONLY */}
        <Col md={4} className="profile-edit-left bg-danger">
          <div className="text-center">
            <Image
              src={leftSideImageSrc}
              alt={findUser?.name || "User"}
              className="profile-edit-avatar mb-3"
              roundedCircle
              fluid
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h2 className="profile-edit-name text-white">
              {findUser?.name || "User Name"}
            </h2>
            <p className="text-white-50">
              {findUser?.role || "email@example.com"}
            </p>
          </div>
        </Col>

        {/* RIGHT SIDE - FORM FIELDS WITH IMAGE UPLOAD */}
        <Col md={8} className="profile-edit-right">
          <h3 className="section-title mb-4">Edit Profile</h3>

          <Formik
            initialValues={{
              name: findUser?.name || "",
              email: findUser?.email || "",
              phone: findUser?.phone || "",
              dob: findUser?.dob || "",
              address: findUser?.address || "",
              city: findUser?.city || "",
              pincode: findUser?.pincode || "",
              password:findUser.password || "",
              confirmPassword:findUser.confirmPassword || "",
              avatar: findUser?.avatar || "https://via.placeholder.com/60",
              role:findUser?.role
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit}>
                {/* Image Upload Field */}
                <Form.Group className="mb-4" controlId="formImage">
                  <Form.Label>Profile Image</Form.Label>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <Image
                        src={imagePreview || findUser?.avatar || "https://via.placeholder.com/60"}
                        alt="Preview"
                        roundedCircle
                        width="60"
                        height="60"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="bg-light"
                      />
                      <Form.Text className="text-muted">
                        Supported formats: JPG, PNG, GIF (Max size: 5MB)
                      </Form.Text>
                    </div>
                  </div>
                </Form.Group>

                <Row>
                  <Col md={6}>
                  <Form.Control readOnly value={values.role}/>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter 10 digit phone number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDob">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.dob && errors.dob}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.dob}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="address"
                    placeholder="Enter your street address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.address && errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.city && errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPincode">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="text"
                        name="pincode"
                        placeholder="Enter 6 digit pincode"
                        value={values.pincode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.pincode && errors.pincode}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.pincode}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

               
               
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter new password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.password && errors.password}
                          style={{ paddingRight: "40px" }}
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            zIndex: 10
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </div>
                      <Form.Text className="text-muted">
                        Min 6 characters with 1 uppercase, 1 lowercase & 1 number
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm new password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.confirmPassword && errors.confirmPassword}
                          style={{ paddingRight: "40px" }}
                        />
                        <span
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            zIndex: 10
                          }}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="profile-edit-actions mt-4">
                  <Button 
                    type="submit" 
                    variant="outline-danger" 
                    className="me-2"
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                  <Link to="/profile">
                    <Button variant="outline-dark">Cancel</Button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEdit;