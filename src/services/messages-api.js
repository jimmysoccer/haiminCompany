import axios from "axios";
import { GET_MESSAGES_URL, SEND_MESSAGES_URL } from "./api-url";

export const sendMessages = async (payload) => {
  const res = await axios.post(SEND_MESSAGES_URL, payload);
  return res;
};

export const getMessages = async () => {
  const res = await axios.get(GET_MESSAGES_URL);
  return res;
};
