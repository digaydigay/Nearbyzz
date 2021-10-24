import React, { useState } from "react";
import nextmedia from "../../assets/nextmedia.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Formactions from "./formactions";
export default function SignUp() {
  const { onSignUp, onGoogle, onFacebook, error } = Formactions();
  const [password, setPassword] = useState(false);

  const See = () => {
    setPassword(!password);
  };
  const initialvalues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validate = Yup.object({
    username: Yup.string()
      .min(2, "Your username is too short")
      .max(12, "Your username is too long")
      .required("username is required"),
    email: Yup.string().email().required("email address is required"),
    password: Yup.string()
      .required("atleast 6-12 character w/ one number")
      .min(6, "atleast 6-12 character w/ one number")
      .max(12, "atleast 6-12 character w/ one number")
      .matches(/[0-9]+$/, "Must atleast one number"),
    confirmpassword: Yup.string()
      .required("need to confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <>
      <div className="sign_up_container">
        <div className="signup_container">
          <div className="signup_form_group">
            {/* signup Header */}
            <div className="signup_form_header">
              <h2>Sign Up</h2>
              <div className="nextmedia_logo">
                <img src={nextmedia} alt="N" />
              </div>
            </div>

            {/* singup form */}
            {error && <div className="error_message">{error}</div>}
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={(values) => {
                onSignUp({
                  email: values.email,
                  password: values.password,
                  username: values.username,
                });
              }}
            >
              {(formik) => (
                <Form className="form">
                  <div className="input_group">
                    <label>Username</label>
                    <Field
                      type="text"
                      placeholder="Username..."
                      name="username"
                    />
                    <div
                      className={`${
                        formik.errors.username &&
                        formik.touched.username &&
                        "error_message"
                      } `}
                    >
                      {formik.errors.username &&
                        formik.touched.username &&
                        formik.errors.username}
                    </div>
                  </div>
                  <div className="input_group">
                    <label>Email</label>
                    <Field
                      type="email"
                      placeholder="Email Address..."
                      name="email"
                    />
                    <div
                      className={`${
                        formik.errors.email &&
                        formik.touched.email &&
                        "error_message"
                      } `}
                    >
                      {formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email}
                    </div>
                  </div>
                  <div className="input_group">
                    <label>Password</label>
                    <div style={{ position: "relative" }}>
                      <Field
                        type={!password ? "password" : "text"}
                        placeholder="Password..."
                        name="password"
                      />
                      <i
                        onClick={See}
                        className={
                          !password ? "fas fa-eye-slash" : "fas fa-eye"
                        }
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "50%",
                          transform: "translate(0,-50%)",
                          cursor: "pointer",
                          color: "gray",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>

                    <div
                      className={`${
                        formik.errors.password &&
                        formik.touched.password &&
                        "error_message"
                      } `}
                    >
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </div>
                  </div>
                  <div className="input_group">
                    <label>Confirm Password</label>
                    <Field
                      type="password"
                      placeholder="Confirm Password..."
                      name="confirmpassword"
                    />
                    <div
                      className={`${
                        formik.errors.confirmpassword &&
                        formik.touched.confirmpassword &&
                        "error_message"
                      } `}
                    >
                      {formik.errors.confirmpassword &&
                        formik.touched.confirmpassword &&
                        formik.errors.confirmpassword}
                    </div>
                  </div>
                  <button type="submit" className="signup_btn">
                    Sign Up Now
                  </button>
                </Form>
              )}
            </Formik>
            {/* or */}
            <div className="or">
              <p>or</p>
            </div>
            {/* social auth */}
            <div className="social_auth">
              <div className="social" onClick={onFacebook}>
                <i className="fab fa-facebook"></i>
              </div>
              <div className="social" onClick={onGoogle}>
                <i className="fab fa-google"></i>
              </div>
            </div>

            {/* signup footer */}
            <div className="signup_form_footer">
              <h5>
                Already have an Account? <a href="/signin">Log In</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
