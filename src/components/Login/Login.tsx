import React, { useContext } from "react";
import backgroundImg from "../../assets/images/shopping-bag-cart.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "../Context/tokenContext";

function Login() {
  // CONTEXT
  let { setToken }: any = useContext(tokenContext);
  // YUP SCHEMA
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z1-9]{6,}[@#$%^&*]{1,}$/)
      .required("required"),
  });
  let navigate = useNavigate();

  async function signIn(value: {}) {
    let { data } = await axios.post(
      "https://shop-easy-backend.onrender.com/auth/signin",
      value
    );
    setToken(data.data.token);
    localStorage.setItem("token", data.data.token);
    navigate("/home");
  }

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: signIn,
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
                  <h2 className="text-uppercase text-center mb-5">Sign in</h2>
                  <div>
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
                      <p>Forgot your password?</p>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-white"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?
                      <Link to={"/register"} className="fw-bold text-body">
                        SignUp
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

export default Login;
