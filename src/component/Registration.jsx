import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Col, Row, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function Registration() {
  const mynav = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Please Select the title !"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Please Enter Your First Name !"),

    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Please Enter Your Last Name !"),

    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter Your Email!"),

    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,
        " Must use Alpha Numeric with special char and length 8 must be 8 charcarter"
      )
      .required("Please Enter Password"),

    confirmPassword: Yup.string()
      .required("Please Enter Confirm Password")
      .oneOf([null, Yup.ref("password")], "password should match"),

    acceptTerms: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // Hash the password before storing
      const encryptedPassword = bcrypt.hashSync(values.password, 10);

      // Store user information in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...values,
          password: encryptedPassword,
        })
      );
      setShowToast(true);
      mynav("/login");
    },
  });

  return (
    <Row className="justify-content-center">
      <Col className="shadow bg-white col-lg-5 mt-5">
        <Form className="p-3" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Select your Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={formik.handleChange}
              isInvalid={formik.touched.title && formik.errors.title}
            />

            <Form.Control.Feedback type="invalid">
              {formik.touched.title && formik.errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />

            <Form.Control.Feedback type="invalid">
              {formik.touched.firstName && formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Enter Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={formik.handleChange}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            />

            <Form.Control.Feedback type="invalid">
              {formik.touched.lastName && formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmails">
            <Form.Label>Enter Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={formik.handleChange}
              isInvalid={formik.touched.email && formik.errors.email}
            />

            <Form.Control.Feedback type="invalid">
              {formik.touched.email && formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswords">
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

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckBox">
            <Form.Check
              type="checkbox"
              name="acceptTerms"
              onChange={formik.handleChange}
              isInvalid={
                formik.touched.acceptTerms && formik.errors.acceptTerms
              }
            />
            <Form.Label>Accept term and Condition</Form.Label>

            <Form.Control.Feedback type="invalid">
              {formik.touched.acceptTerms && formik.errors.acceptTerms}
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
          position: 'fixed',
          top: 20,
          right: 20,
          minWidth: 200
        }}
        bg="success"
        text="white"
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Registration Successful!</Toast.Body>
      </Toast>
    </Row>
  );
}

export default Registration;
