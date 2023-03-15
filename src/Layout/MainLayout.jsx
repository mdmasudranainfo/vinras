import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Header/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
