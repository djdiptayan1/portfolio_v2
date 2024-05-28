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
      <div className="">
        <Navbar />
      </div>
      <main className="w-full">{children}</main>
      <div className=" pt-24">
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
