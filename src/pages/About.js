import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return <div>About</div>;
};

export default About;
