import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Blogs from "./pages/Blogs";
import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      {/* Navbar remains persistent across all routes */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Services" element={<Services />}/>
        <Route path="Resources" element={<Resources />}/>
        <Route path="blogs" element={<Blogs />}/>
        <Route path="Contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
