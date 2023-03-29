import React from "react";
import Header from "../common/Header";
import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Service from "./components/Service";
import Footer from "../common/Footer";
import Project from "./components/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Index;
