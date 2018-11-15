import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
    </nav>
  );
};

export default NavBar;
