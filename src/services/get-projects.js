import axios from "axios";
import { GET_PROJECT_URL } from "./api-url";

export const getProjects = async () => {
  const res = await axios.get(GET_PROJECT_URL);
  return res;
};
