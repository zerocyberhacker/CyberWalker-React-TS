/** @format */

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Lecture2: React.FC = () => {
  return (
    <>
      <h1>This is Lecture 2.</h1>
      <p>
        <NavLink to={"/"}>back</NavLink>
      </p>
      <br />
    </>
  );
};

export default Lecture2;
