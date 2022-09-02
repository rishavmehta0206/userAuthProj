import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import TopNav from "../components/TopNav";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
