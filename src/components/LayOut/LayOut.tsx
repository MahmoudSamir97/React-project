import React from "react";
import { ColorSchemesExample as Navbar } from "../AppNavbar/Navbar";
import Footer from "../AppFooter/Footer";
import About from "../About/About";
import { Outlet } from "react-router-dom";

function LayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayOut;
