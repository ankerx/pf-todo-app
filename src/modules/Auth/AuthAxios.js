import axios from "axios";
import configData from "../../configData.json";

const token = sessionStorage.getItem("token");
console.log(token);
const AuthAxios = axios.create({
  baseURL: configData.SERVER_URL,
  headers: { Authorization: `Bearer ${token}` },
});

export default AuthAxios;
