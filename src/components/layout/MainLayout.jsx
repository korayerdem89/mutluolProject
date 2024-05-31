import React from "react";
import Header2 from "../header/Header";
import Footer2 from "../footer/Footer2";
import Breadcrumb from "../common/Breadcrumb";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header2 />
      <Breadcrumb />
      {children}
      <Footer2 />
    </>
  );
};

export default MainLayout;
