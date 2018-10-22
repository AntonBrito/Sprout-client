import React from "react";
import PropTypes from "prop-types";

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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            {
              // Add for navbar
              /* <li className="nav-item">
              <a href="/" className="nav-link">
                Add
              </a>
            </li> */
            }
            {/* <i
              className="fab fa-github"
              style={{ cursor: "pointer", float: "right" }}
              onClick={this.onClick}
            /> */}
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
