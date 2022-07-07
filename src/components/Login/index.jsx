import React, { useState, useEffect } from "react";
import Title from "../Title";
import styled from "styled-components";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 60vh;

  h2 {
    background: #28d;
    padding: 20px;
    font-size: 1.4em;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }
`;
const ContainerLogin = styled.div`
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
`;

const Triangle = styled.div`
  width: 0;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #28d;
`;

const FormContainer = styled.form`
  background: #ebebeb;
  padding: 12px;

  input {
    padding: 12px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    padding: 16px;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
  }
  input[type="email"],
  input[type="password"] {
    background: #fff;
    border-color: #bbb;
    color: #555;
  }
`;

const Btn = styled.button`
  background: #28d;
  width: 100px;
  height: auto;
  border-color: transparent;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  :hover {
    background: #17c;
  }
`;

const Login = ({ setInputValues }) => {
  const data = window.localStorage.getItem("data");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    setInputValues({
      userEmail: email,
      userPassword: password,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (data) {
      return navigate("/home");
    }
  }, [data, navigate]);

  return (
    <Container>
      <div>
        <Title title="Login" />
      </div>
      <ContainerLogin>
        <Triangle />
        <h2>Log in</h2>
        <FormContainer onSubmit={handlerSubmit}>
          <Input
            handleChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
          />

          <Input
            handleChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={password}
          />

          <Btn type="submit">Ingresar</Btn>
        </FormContainer>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
