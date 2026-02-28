import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddProduct() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  const schema = yup.object().shape({
    name: yup.string().required("Product name is required"),
    price: yup.number().typeError("Enter valid price").required("Price is required"),
    category: yup.string().required("Category is required"),
    images: yup.string().url("Enter valid image URL").required("Image is required"),
    description: yup.string().min(10, "Minimum 10 characters").required("Description is required"),
  });

  const handleAddProduct = (values) => {
    values.id = Date.now()
    dispatch(addProducts(values))
    toast.success("Product Added Syuccesfully")
    navigate("/poroduct-list")
  };

  return (
    <Container className="fk-addproduct-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="fk-card">
            <h4 className="fk-title">Add New Product</h4>

            <Formik
              validationSchema={schema}
              onSubmit={handleAddProduct}
              initialValues={{
                name: "",
                price: "",
                category: "",
                images: "",
                description: "",
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
                <Form onSubmit={handleSubmit}>
                  
               
                  <Row className="mb-3">
                    <Col md={3} className="fk-label">Product Name</Col>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

                 
                  <Row className="mb-3">
                    <Col md={3} className="fk-label">Price</Col>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="price"
                        placeholder="₹ Enter price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.price && !!errors.price}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.price}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

               
                  <Row className="mb-3">
                    <Col md={3} className="fk-label">Category</Col>
                    <Col md={9}>
                      <Form.Select
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.category && !!errors.category}
                      >
                        <option value="">Select category</option>
                        <option>Mobiles</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.category}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

                 
                  <Row className="mb-3">
                    <Col md={3} className="fk-label">Image URL</Col>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="images"
                        placeholder="Paste image URL"
                        value={values.images}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.images && !!errors.images}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.images}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

                
                  <Row className="mb-4">
                    <Col md={3} className="fk-label">Description</Col>
                    <Col md={9}>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        placeholder="Product description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.description && !!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

               
                  <div className="text-end">
                    <Button type="submit" variant="danger" className="fk-btn">
                      Add Product
                    </Button>
                  </div>

                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;