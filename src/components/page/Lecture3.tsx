/** @format */

import { NavLink } from "react-router-dom";
import { IfPropsTag, PropsTag } from "./support/propsForLecture3";
import { useState } from "react";

const Lecture3: React.FC = () => {
  const [bool, setBool] = useState<boolean>(false);

  const handleClick = () => {
    if (bool === false) {
      setBool(true);
    } else {
      setBool(false);
    }
  };

  return (
    <>
      <h1>This is Lecture 3.</h1>
      <p>
        <NavLink to={"/"}>back</NavLink>
      </p>
      <br />

      <br />
      <PropsTag name='Kris' age={1} color='red' />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <IfPropsTag isopen={bool} />
    </>
  );
};

export default Lecture3;
