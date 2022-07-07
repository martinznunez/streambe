import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Container = styled.div`
  margin: 10px;
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-around;
  img {
    width: 30px;
    height: 30px;
  }

  h3 {
    cursor: pointer;
  }
`;

const Logout = ({ handleClickLogout }) => {
  return (
    <Container>
      <img src="./assets/icon.png" alt="icon" />
      <h3 onClick={handleClickLogout}>Logout</h3>
    </Container>
  );
};

Logout.propTypes = {
  handleClickLogout: PropTypes.func,
};

export default Logout;
