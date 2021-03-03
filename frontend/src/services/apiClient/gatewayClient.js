import axios from "axios";

export const gatewayClient = axios.create({
  baseURL: "http://localhost:8081/api",
  withCredentials: false,
  timeout: 10000
});
