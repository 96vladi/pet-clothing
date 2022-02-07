import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "../../components/NavBar";
import { Login } from "../../components/Login";
import { Summer } from '../../components/Summer';
import { Winter } from "../../components/Winter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={ <Login /> }/>
          <Route exact path="/summer" element={ <Summer /> }/>
          <Route exact path="/winter" element={ <Winter /> }/>
        </Routes>
      </div>
    </Router>
  );
};
