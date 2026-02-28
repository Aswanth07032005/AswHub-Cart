import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./EditProduct.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProduct } from "../redux/productSlice";

function EditProduct() {
 
  const navigate = useNavigate();
  const { id } = useParams();

  const {addedProducts} = useSelector((state) => state.productState);

  const existingProduct = addedProducts.find(
    (item) => item.id === Number(id)
  );

  const dispatch = useDispatch()

  const schema = yup.object().shape({
    name: yup.string().required("Product name is required"),
    price: yup.number().typeError("Enter valid price").required("Price is required"),
    category: yup.string().required("Category is required"),
    images: yup.string().url("Enter valid image URL").required("Image is required"),
    description: yup
      .string()
      .min(10, "Minimum 10 characters")
      .required("Description is required"),
  });

  const handelEditProduct = (values) => {
    console.log(values);

    values.id = Number(id);

    dispatch(updateProduct(values));

    toast.success("Updated this Product Succesfully");
    navigate("/poroduct-list");
  };

  if (addedProducts.length  === 0) {
    return <h4 className="text-center mt-5">Product Not Found</h4>;
  }

  return (
    <Container fluid className="fk-edit-wrapper">
  <Row className="justify-content-center">
    <Col xl={10}>
      <div className="fk-edit-card">

        <h4 className="fk-edit-title">Edit Product</h4>

        <Formik
          validationSchema={schema}
          onSubmit={handelEditProduct}
          initialValues={{
            id: existingProduct.id,
            name: existingProduct.name,
            price: existingProduct.price,
            category: existingProduct.category,
            images: existingProduct.images,
            description: existingProduct.description,
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
              <Row>

               
                <Col lg={8}>

                  <div className="fk-form-section">

                  
                    <Form.Group className="mb-4">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                  
                    <Form.Group className="mb-4">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.price && !!errors.price}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.price}
                      </Form.Control.Feedback>
                    </Form.Group>

                 
                    <Form.Group className="mb-4">
                      <Form.Label>Category</Form.Label>
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
                    </Form.Group>

                 
                    <Form.Group className="mb-4">
                      <Form.Label>Image URL</Form.Label>
                      <Form.Control
                        type="text"
                        name="images"
                        value={values.images}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.images && !!errors.images}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.images}
                      </Form.Control.Feedback>
                    </Form.Group>

                   
                    <Form.Group className="mb-4">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.description && !!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
                      </Form.Control.Feedback>
                    </Form.Group>

                  </div>

                </Col>

              
                <Col lg={4}>
                  <div className="fk-preview-card">
                    <h6 className="mb-3">Preview</h6>
                    {values.images ? (
                      <img
                        src={values.images}
                        alt="preview"
                        className="img-fluid rounded"
                      />
                    ) : (
                      <div className="fk-preview-placeholder">
                        Image Preview
                      </div>
                    )}
                    <div className="mt-3">
                      <h6 className="fw-bold">{values.name}</h6>
                      <p className="text-muted small">
                        ₹ {values.price}
                      </p>
                    </div>
                  </div>
                </Col>

              </Row>

         
              <div className="fk-action-bar">
                <Button
                  variant="outline-dark"
                  className="me-3"
                  onClick={() => navigate("/poroduct-list")}
                >
                  Cancel
                </Button>

                 <Button type="submit" variant="danger" className="fk-save-btn">
                  Update Product
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

export default EditProduct;