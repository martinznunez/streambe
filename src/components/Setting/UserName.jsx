import React from "react";
import PropTypes from "prop-types";
const UserName = ({ userName }) => {
  return (
    <p>
      Hola <strong>{userName}</strong>
    </p>
  );
};
UserName.propTypes = {
  userName: PropTypes.string,
};

export default UserName;
