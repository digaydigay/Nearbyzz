import React, { useState } from "react";
import nextmedia from "../../assets/nextmedia.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Formactions from "./formactions";
export default function SignIn() {
  const { onSignIn, onGoogle, onFacebook, error } = Formactions();
  const [password, setPassword] = useState(false);

  const See = () => {
    setPassword(!password);
  };
  return (
    <>
      <div className="signin_container">
        <div className="signin_form_group">
          {/* signup Header */}
          <div className="signin_form_header">
            <h2>Sign In</h2>
            <div className="nextmedia_logo">
              <img src={nextmedia} alt="N" />
            </div>
          </div>
          {error && <div className="error_message">{error}</div>}
          {/* singup form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("email is required!"),
              password: Yup.string()
                .required("password is required!")
                .min(6, "must be 6-12 character w/ one number")
                .max(12, "must be 6-12 character w/ one number"),
            })}
            onSubmit={(values) => {
              onSignIn({ email: values.email, password: values.password });
            }}
          >
            {(formik) => (
              <Form className="form">
                <div className="input_group">
                  <label>Email</label>
                  <Field
                    type="email"
                    placeholder="Email Address..."
                    name="email"
                  />
                  <h4
                    className={`${
                      formik.errors.email &&
                      formik.touched.email &&
                      "error_message"
                    } `}
                  >
                    {formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email}
                  </h4>
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
                      className={!password ? "fas fa-eye-slash" : "fas fa-eye"}
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
                  <h2
                    className={`${
                      formik.errors.password &&
                      formik.touched.password &&
                      "error_message"
                    } `}
                  >
                    {formik.errors.password &&
                      formik.touched.password &&
                      formik.errors.password}
                  </h2>
                </div>
                <button className="signin_btn" type="submit">
                  Sign In Now
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
          <div className="signin_form_footer">
            <h5>
              Need to Create? <a href="/signup">Sign up</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
