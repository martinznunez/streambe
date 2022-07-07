import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, value, placeholder, handleChange, name }) => {
  return (
    <input
      onChange={handleChange}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
