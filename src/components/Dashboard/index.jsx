import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logout from "../Setting/Logout";
import UserName from "../Setting/UserName";
import Table from "../Table";
import PropTypes from "prop-types";

import { getDataTable } from "../../service/getDataTable";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ContainerLogout = styled.div`
  display: flex;
  width: auto;
  padding: 15px;
  align-self: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

const Dashboard = ({ user }) => {
  const data = window.localStorage.getItem("data");
  const navigate = useNavigate();
  const [dataList, setDataList] = useState();

  useEffect(() => {
    const fetchDataTable = async () => {
      try {
        const response = await getDataTable();
       
        setDataList(response.data.users);
      } catch (e) {
        alert(
          "Please try again in a few minutes. We are unable to complete the verification"
        );
      }
    };
    fetchDataTable();
  }, []);

  const handleClickLogout = () => {
    window.localStorage.removeItem("data");
    return navigate("/");
  };

  useEffect(() => {
    if (!data) {
      return navigate("/");
    }
  }, [data, navigate]);

  return (
    <>
      <ContainerLogout>
        <UserName userName={user} />
        <Logout handleClickLogout={handleClickLogout} />
      </ContainerLogout>
      <Container>
        <Table dataList={dataList} />
      </Container>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.string,
};

export default Dashboard;
