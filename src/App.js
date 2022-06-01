import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Resume, MovieSeat, MichWich } from "./screens/index";
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
          <Route path={"/projects/MovieSeat"} element={<MovieSeat />} />
          <Route path={"/projects/MichWich"} element={<MichWich />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
