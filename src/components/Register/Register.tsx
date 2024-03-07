import React, { useState } from "react";
import backgroundImg from "../../assets/images/shopping-bag-cart.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  let [hasRegisteredSuccessfully, sethasRegisteredSuccessfully] =
    useState(false);
  // YUP SCHEMA
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "user name is too short!")
      .max(25, "user name is too long!")
      .required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z1-9]{6,}[@#$%^&*]{1,}$/, {
        message:
          "Password should contain Uppercase, Lowercase and special characters",
      })
      .required("required"),
    CPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "password and confirmed password should be matched"
      )
      .required("required"),
    phoneNumber: Yup.string()
      .matches(new RegExp(/^01[0|1|2|5]{1}[0-9]{8}$/), "Invalid phone number")
      .required("required"),
  });

  let navigate = useNavigate();
  // REGISTER
  async function register(value: {}) {
    await axios.post(
      "https://shop-easy-backend.onrender.com/auth/signup",
      value
    );
    sethasRegisteredSuccessfully(true);
    // navigate("/login");
  }

  const registerForm = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      CPassword: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: register,
  });

  return (
    <section
      className="p-5 bg-image"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        className="mask d-flex align-items-center  gradient-custom-3"
        onSubmit={registerForm.handleSubmit}
      >
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        User Name
                      </label>
                      <input
                        type="text"
                        value={registerForm.values.userName}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        name="userName"
                        id="userName"
                        className="form-control form-control-lg mb-0"
                      />
                      {registerForm.errors.userName &&
                      registerForm.touched.userName ? (
                        <div className="alert alert-danger p-2">
                          {registerForm.errors.userName}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={registerForm.values.email}
                        name="email"
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        id="email"
                        className="form-control form-control-lg mb-0"
                      />
                      {registerForm.errors.email &&
                      registerForm.touched.email ? (
                        <div className="alert alert-danger p-2">
                          {registerForm.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        value={registerForm.values.password}
                        name="password"
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        id="password"
                        className="form-control form-control-lg mb-0"
                      />

                      {registerForm.errors.password &&
                      registerForm.touched.password ? (
                        <div className="alert alert-danger p-2">
                          {registerForm.errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        value={registerForm.values.CPassword}
                        name="CPassword"
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        id="CPassword"
                        className="form-control form-control-lg mb-0"
                      />

                      {registerForm.errors.CPassword &&
                      registerForm.touched.CPassword ? (
                        <div className="alert alert-danger p-2">
                          {registerForm.errors.CPassword}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={registerForm.values.phoneNumber}
                        name="phoneNumber"
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className="form-control form-control-lg mb-0"
                      />

                      {registerForm.errors.phoneNumber &&
                      registerForm.touched.phoneNumber ? (
                        <div className="alert alert-danger p-2">
                          {registerForm.errors.phoneNumber}
                        </div>
                      ) : null}
                    </div>
                    <div className="d-flex flex-direction-column justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-white"
                      >
                        Register
                      </button>
                      {hasRegisteredSuccessfully ? (
                        <h4 className="text-danger text-center ms-2 d-block">
                          {" "}
                          verification email sent!
                        </h4>
                      ) : null}
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <Link to={"/login"} className="fw-bold text-body">
                        Login Here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Register;
