/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Lecture1 from "./components/page/Lecture1";
import Lecture2 from "./components/page/Lecture2";
import Lecture3 from "./components/page/Lecture3";
import Lecture4 from "./components/page/Lecture4";
import Lecture5 from "./components/page/Lecture5";
import Lecture6 from "./components/page/Lecture6";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App} /> {/* 👈 Renders at /app/ */}
      <Route path='/lecture-1' Component={Lecture1} />
      <Route path='/lecture-2' Component={Lecture2} />
      <Route path='/lecture-3' Component={Lecture3} />
      <Route path='/lecture-4' Component={Lecture4} />
      <Route path='/lecture-5' Component={Lecture5} />
      <Route path='/lecture-6' Component={Lecture6} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
