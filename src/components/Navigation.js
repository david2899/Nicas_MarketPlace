import React from "react";
import { Link } from "react-router-dom";
import { UseHistyles } from "../Hooks/UseHistyles";
import "../styles/navBar.css";
import { useLocation } from 'react-router-dom';
import { home, aboutUs, market } from "../Utils/Pathnames";

export const Navigation = () => {
  const { LinkActive } = UseHistyles()
  const location = useLocation();
  const logoNav = "https://scholarlykitchen.sspnet.org/wp-content/uploads/2021/03/NF-RGB_APNG-Logo-300x300.png";

  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light">
      <img src={logoNav} alt="logo" className="navbar-brand" to="/home" />
      <button id="icon-collapse" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse  navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ml-2">
            <Link style={location.pathname === home ? LinkActive : null} className="nav-link" to="/">
              <span>
                <i className="fas fa-house"></i>
              </span>
              Home
            </Link>
            {
              location.pathname === home ?
                <div id="linkActive" className="dropdown-divider" /> : null
            }
          </li>
          <li className="nav-item ml-2">
            <Link style={location.pathname === market ? LinkActive : null} className="nav-link" to={market}>
              <span>
                <i className="fas fa-cart-shopping"></i>
              </span>
              Market
            </Link>
            {
              location.pathname === market ?
                <div id="linkActive" className="dropdown-divider" /> : null
            }
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="#">
              <span>
                <i className="fas fa-circle-plus"></i>
              </span>
              Create NFT
            </Link>
            {/* {
              location.pathname === home ? 
               <div id="linkActive" className="dropdown-divider" />  : null
            } 

          </li> */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </Link>
             {
              location.pathname === aboutUs ? 
               <div id="linkActive" className="dropdown-divider" />  : location.pathname === "/contact" ? 
               <div id="linkActive" className="dropdown-divider" /> : null
            }

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className={location.pathname === aboutUs ? "dropdown-item-active" : "dropdown-item"}
                to="/about-us">
                <span className="mr-1">
                  <i className="fas fa-users-gear"></i>
                </span>
                About Us
              </Link>
              <Link
                className="dropdown-item"
                to="/about-us">
                <span className="mr-1">
                  <i className="fas fa-users-gear"></i>
                </span>
                Contact
              </Link>
              {/* <div className="dropdown-divider" />  */}
              <Link className="dropdown-item" to="#">Something else here</Link>
            </div>
          </li>
          {/* <li className="nav-item">
            <Link 
            style={location.pathname === aboutUs ? LinkActive : null}
            className="nav-link disabled" to="/about-us">
              <span>
                <i className="fas fa-users-gear"></i>
              </span>
              About Us
            </Link>
            {
              location.pathname === aboutUs ? 
               <div id="linkActive" className="dropdown-divider" />  : null
            }
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Connect
            <span className="ml-2">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </form>
      </div>
    </nav>
  )
}
