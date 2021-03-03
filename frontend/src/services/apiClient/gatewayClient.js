import axios from "axios";

export const gatewayClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  timeout: 10000
});
