import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/stories/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
            <li>
              <i
                className="fab fa-github"
                style={{ cursor: "pointer", float: "right" }}
                onClick={this.onClick}
              />
              <Link to="/" className="nav-link" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.branding = {
  branding: "My App"
};

Header.protoTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
