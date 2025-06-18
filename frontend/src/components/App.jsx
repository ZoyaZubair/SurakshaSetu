// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import Register from "./Register";
import Navbar from "./Navbar";
import NavbarLogin from "./NavbarLogin";
import NavbarPoliceLogin from "./NavbarPoliceLogin";
import Footer from "./Footer";
import Home from "./Home";
import PoliceSign from "./PoliceSign";
import CitizenSign from "./CitizenSign";
import LodgeComplaint from "./LogdeComplaint";
import ComplaintComponent from "./ComplaintComponent";
import Solved from "./Solved";
import Pending from "./Pending";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import PoliceRegister from "./PoliceRegister";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ProtectedRoutes2 } from "./ProtectedRoutes2";

const cookies = new Cookies();

function App() {
  const [navbar, setNavbar] = useState(<Navbar />);

  useEffect(() => {
    const token = cookies.get("TOKEN");
    const policetoken = cookies.get("POLICETOKEN");

    if (token) {
      setNavbar(<NavbarLogin />);
    } else if (policetoken) {
      setNavbar(<NavbarPoliceLogin />);
    } else {
      setNavbar(<Navbar />);
    }
  }, []);

  return (
    <BrowserRouter>
      {navbar}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/police-register" element={<PoliceRegister />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/lodgecomplaint" element={<LodgeComplaint />} />
          <Route path="/yourcomplaint" element={<ComplaintComponent />} />
          <Route path="/viewstats" element={<Statistics />} />
        </Route>

        <Route element={<ProtectedRoutes2 />}>
          <Route path="/pending" element={<Pending />} />
          <Route path="/solved" element={<Solved />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
