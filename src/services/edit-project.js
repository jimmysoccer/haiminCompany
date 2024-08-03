import axios from "axios";
import { EDIT_PROJECT_URL } from "./api-url";

export const editProject = async (payload) => {
  const res = await axios.post(EDIT_PROJECT_URL, payload);
  return res;
};
