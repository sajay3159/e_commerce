import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Row, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function Login() {
  const nav = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter Your Email!"),
    password: Yup.string().required("Please Enter Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // Retrieve user data from local storage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === values.email &&
        bcrypt.compareSync(values.password, storedUser.password)
      ) {
        // If credentials match, generate a random token
        const token = Math.random().toString(36).substring(7);
        // Store the token in local storage
        localStorage.setItem("token", token);
        nav("/home");
      } else {
        setToastMessage("Invalid email or password");
        setShowToast(true);
      }
    },
  });

  return (
    <Row className="justify-content-center">
      <Col className="shadow bg-white col-lg-5 mt-5">
        <Form className="p-3" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {formik.touched.email && formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.password && formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}
        bg="danger"
        text="white"
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </Row>
  );
}

export default Login;
