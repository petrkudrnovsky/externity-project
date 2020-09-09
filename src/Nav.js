import React from "react";
import logo from './externity-blue.svg';
import "./styles/style.css";
import {Link} from "react-router-dom";

function Nav() {
  return (
      <nav>
        <Link to="/">
          <img src={logo} alt="externity logo" className="logo"></img>
        </Link>
        <Link to="/kontakt"><span className="contact">Kontakt</span></Link>
      </nav>
  );
}

export default Nav;