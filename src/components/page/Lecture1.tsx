/** @format */

import { NavLink } from "react-router-dom";
import { ChangeEvent, useState } from "react";

type loginData = { email: string; password: string };

const Lecture1: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [data, setData] = useState<loginData>();

  //   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const result = e.target.value as string;
  //     setEmail(result);
  //   };

  //   const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const result = e.target.value as string;
  //     setPassword(result);
  //   };

  const handleLogin = () => {
    const data: loginData = {
      email: email,
      password: password
    };
    console.log(data);
    setData(data);
  };

  return (
    <>
      <h1>This is Lecture 1.</h1>
      <p>
        <NavLink to={"/"}>back</NavLink>
      </p>
      <label>Email:</label>
      <br />
      <input
        type='email'
        className='account'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Password:</label>
      <br />
      <input
        type='password'
        className='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <h5>Email: {data?.email}</h5>
      <h5>Password: {data?.password}</h5>
    </>
  );
};

export default Lecture1;
