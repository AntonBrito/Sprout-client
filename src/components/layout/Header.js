import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>Sprout</h1>
    </div>
  );
};

Header.protoTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
