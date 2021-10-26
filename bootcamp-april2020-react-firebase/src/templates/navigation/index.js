import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentPage } = this.props;
    return (
      <div className="nav-container">
        <div className="logo">Ini Logo</div>
        <div className="menu">
          {/* <Link to="/list">
                        <div
                            className={`menu-item ${currentPage === "list" ? "active" : ""}`}>List</div>
                    </Link>
                    <Link to="/form">
                        <div
                            className={`menu-item ${currentPage === "form" ? "active" : ""}`}>Form</div>
                    </Link> */}
          <Link to="/login">
            <div
              className={`menu-item ${currentPage === "login" ? "active" : ""}`}
            >
              Login
            </div>
          </Link>
          <Link to="/firestore">
            <div
              className={`menu-item ${
                currentPage === "firestore" ? "active" : ""
              }`}
            >
              Firestore
            </div>
          </Link>
          {/* <Link to="/register">
                        <div
                            className={`menu-item ${currentPage === "register" ? "active" : ""}`}>Register</div>
                    </Link> */}
        </div>
      </div>
    );
  }
}

export default Nav;
