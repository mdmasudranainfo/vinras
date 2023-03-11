import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Header/Footer/Footer";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
