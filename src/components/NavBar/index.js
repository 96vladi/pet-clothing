import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export const Navbar = () => {
  const { user: { name } } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            // activeClassName="active"
            className="nav-item nav-link"
            // exact
            to="/summer"
          >
            Summer
          </NavLink>

          <NavLink
            // activeClassName="active"
            className="nav-item nav-link"
            // exact
            to="/winter"
          >
            Winter
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            // activeClassName="active"
            className="nav-item nav-link"
            // exact
            to="/search"
          >
            Search
          </NavLink>
        </ul>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">

          <span className="nav-item nav-link text-info">
            {name}
          </span>

          <button
            className="nav-item nav-link btn"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
