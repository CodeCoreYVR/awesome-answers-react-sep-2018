import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  const { currentUser } = props;

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
      <NavLink exact to="/questions/new">
        New Question
      </NavLink>
      {currentUser ? (
        <span>👩‍💻 {currentUser.full_name}</span>
      ) : (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
