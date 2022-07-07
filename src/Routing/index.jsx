import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Routing = ({setInputValues,user}) => {
    
    const data = window.localStorage.getItem("data");
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login  setInputValues={setInputValues} />} />
        <Route path="/home" element={ data ?  <Dashboard user={user} /> : <Navigate to="/" />   } />
      </Routes>
    </Router>
  );
};

export default Routing;
