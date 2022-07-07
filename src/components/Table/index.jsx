import React from "react";
import styled from "styled-components";
import { formatDate } from "../../utils/formatDate";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

const TableWrapper = styled.div`
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
`;

const ContainerTable = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  text-transform:uppercase;
  img {
    width: 40px;
    height: auto;
    border-radius: 100%;
  }
  td,
  th {
    text-align: center;
    padding: 8px;
  }
  td {
    padding: 20px;
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }
  th {
    width: 200px;
    color: #ffffff;
    background: #4fc3a1;
    padding: 20px;
  }
  tr:nth-child(even) {
    background: #f8f8f8;
  }

  
`;

const Table = ({ dataList }) => {
  return (
    <Container>
      <TableWrapper>
        <ContainerTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th> Photo</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((elem) => (
              <tr key={elem.contactId}>
                <td>{elem.name} </td>
                <td>{formatDate(elem.birthDate)} </td>
                <td>
                  <img
                    src={elem.photo ? elem.photo : "./assets/icon.png"}
                    alt="icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </ContainerTable>
      </TableWrapper>
    </Container>
  );
};

Table.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
