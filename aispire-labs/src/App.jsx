import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./components/Landingpage";
import UseCaseCards from "./components/UseCases";
import AboutPage from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-cases" element={<UseCaseCards />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export const Home = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
