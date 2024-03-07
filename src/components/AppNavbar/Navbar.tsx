import {
  faCartShopping,
  faDumpster,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "../Context/tokenContext";

export function ColorSchemesExample() {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  function loggingOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <div className="brand-container d-flex justify-content-center align-items-center"> */}
          <FontAwesomeIcon icon={faDumpster} style={{ color: "#6a4ec1" }} />
          <Navbar.Brand href="#!" className="ms-2">
            ShopEasy
          </Navbar.Brand>
          {/* </div> */}
          <Nav className="m-auto">
            <Link to={"/home"} className="active ms-5 nav-link">
              Home
            </Link>
            <Link to={"/contact"} className="ms-5 nav-link">
              Contact
            </Link>
            <Link to={"/about"} className="ms-5 nav-link">
              About
            </Link>
            <Link to={"/careers"} className="ms-5 nav-link">
              Careers
            </Link>
            {token ? null : (
              <Link to={"/register"} className="ms-5 nav-link">
                Signup
              </Link>
            )}
          </Nav>
          <div className="input-group rounded ms-auto w-25">
            <input
              type="search"
              className="form-control rounded"
              placeholder="What are you looking for?"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-0"
              id="search-addon"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </Container>
        <FontAwesomeIcon
          className="me-4"
          icon={faHeart}
          style={{ color: "#d93047", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          className="me-4"
          icon={faCartShopping}
          style={{ color: "#ffffff", cursor: "pointer" }}
        />
        {localStorage.getItem("token") ? (
          <NavDropdown
            title={
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
            }
            id="basic-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item
              className="text-white"
              // as={Link}
              // to={"/logout"}
              onClick={loggingOut}
            >
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        ) : null}
      </Navbar>
    </>
  );
}
