import axios from "axios";
import { DELETE_PROJECT_URL } from "./api-url";

export const deleteProject = async (id) => {
  const res = await axios.post(DELETE_PROJECT_URL, { id: id });
  return res;
};
