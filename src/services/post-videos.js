import axios from "axios";
import { POST_VIDEOS_URL } from "./api-url";

export const postVideos = async (files = []) => {
  let formData = new FormData();
  files.forEach((file) => {
    formData.append("videos", file);
  });
  const res = await axios.post(POST_VIDEOS_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
