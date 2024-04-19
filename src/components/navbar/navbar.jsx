import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  faHome,
  faContactBook,
  faCircleInfo,
  faBriefcase,
  faSignOut,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [menuOption, setmenuOption] = useState(false);

  const handlemenu = () =>{
    setmenuOption(!menuOption)
  }

  return (
    <div className="navbar">
      <h1 className="navbar-logo">
        <Link className="link" to="/">
          Trippy
        </Link>
      </h1>

      <div className="menu-icons" onClick={handlemenu}>
        {menuOption ? (
          <FontAwesomeIcon className="custom-icons" icon={faTimes} />
        ) : (
          <FontAwesomeIcon className="custom-icons" icon={faBars} />
        )}
      </div>

      <div className={`nav-links ${menuOption ? "" : "active"}`}>
        <Link className="link" to="/">
          <FontAwesomeIcon className="custom-icon" icon={faHome} />
          Home
        </Link>
        <Link className="link" to="/about">
          <FontAwesomeIcon className="custom-icon" icon={faCircleInfo} />
          About
        </Link>
        <Link className="link" to="/service">
          <FontAwesomeIcon className="custom-icon" icon={faBriefcase} />
          Service
        </Link>
        <Link className="link" to="/contact">
          <FontAwesomeIcon className="custom-icon" icon={faContactBook} />
          Contact
        </Link>
        <Link className="link navlink-mobile" to="/sign">
          <FontAwesomeIcon className="custom-icon" icon={faSignOut} />
          Signup{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
