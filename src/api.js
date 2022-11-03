import axios from "axios";

const baseURL = "https://profitmodel-server.herokuapp.com/api";

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
