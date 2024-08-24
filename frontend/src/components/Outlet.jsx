// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
