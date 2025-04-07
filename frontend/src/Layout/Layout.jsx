import React from "react";

import { Outlet } from 'react-router-dom'

import NavBar from "../Sections/NavBar/NavBar";
import Footer from "../Sections/FooterSection/Footer";


function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
