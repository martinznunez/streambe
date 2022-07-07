import axios from "axios";
export const getDataTable = () => {
  return axios.get("https://www.mockachino.com/06c67c77-18c4-45/users");
};
