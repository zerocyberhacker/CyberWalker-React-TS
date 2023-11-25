/** @format */

import { NavLink } from "react-router-dom";

const Lecture5: React.FC = () => {
  return (
    <>
      <h1>This is Lecture 5.</h1>
      <p>
        <NavLink to={"/"}>back</NavLink>
      </p>
    </>
  );
};

export default Lecture5;
