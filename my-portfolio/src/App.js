import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}