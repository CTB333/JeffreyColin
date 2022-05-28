import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Resume } from "./screens/index";
import { Header, Footer } from "./components/index";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/resume"} element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
