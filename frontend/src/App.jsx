import logo from "./logo.svg";

import { useEffect, useState } from "react";

import loadable from "@loadable/component";

import Header from "./component/Header";
import "./assets/css/vendor.css";
import "./assets/css/main.css";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
