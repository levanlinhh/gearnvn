import axios from "axios";

const API = axios.create({
  baseURL: "https://gearnvn.herokuapp.com",
});
export default API;
