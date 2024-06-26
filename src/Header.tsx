import * as React from "react";
import { NavLink } from "react-router-dom";

import logo from "./logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink
          to="/products"
          className={(isActive) =>
            isActive ? "header-link" : "header-link-active"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          className={(isActive) =>
            isActive ? "header-link" : "header-link-active"
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
