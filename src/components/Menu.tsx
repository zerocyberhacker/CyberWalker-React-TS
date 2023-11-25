/** @format */

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <h1 style={{ fontSize: "500%" }}>Menu</h1>
      <ul>
        <li>
          <NavLink to={"/lecture-1"}>
            Lecture 1 (useState,onClick and onChange)
          </NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-2"}>Lecture 2 (useEffect)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-3"}>Lecture 3 (props)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-4"}>Lecture 4 (Form and && operator)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-5"}>Lecture 5 (APIs and map)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-6"}>Lecture 6 (Loading)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-5"}>Lecture 7 (Page Auth)</NavLink>
        </li>
        <li>
          <NavLink to={"/lecture-6"}>Lecture 8 (React-BootStrap)</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
