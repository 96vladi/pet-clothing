import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../../components/Login";
import { DashBoardRoutes } from "../DashBoardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={ <Login /> }/>
          <Route path="*" element={ <DashBoardRoutes /> }/>
        </Routes>
      </div>
    </Router>
  );
};
