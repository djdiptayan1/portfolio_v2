/**
 * Public Layout - Navbar and Footer
 */

// Dependencies
import React from "react";
import Navbar from "../components/header_footer/Navbar";
import Footer from "../components/header_footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
