import axios from "axios";
import { POST_PROJECT_URL } from "./api-url";

export const postProject = async (payload) => {
  const res = await axios.post(POST_PROJECT_URL, payload);
  return res;
};
