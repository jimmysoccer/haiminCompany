import axios from "axios";
import { GET_LOGIN_AUTH_URL } from "./api-url";

export const getLoginAuth = async (username, password) => {
  const res = await axios.get(GET_LOGIN_AUTH_URL, { username, password });
  return res;
};
