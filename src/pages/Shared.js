import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
