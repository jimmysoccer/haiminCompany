import axios from "axios";
import { POST_IMAGES_URL } from "./api-url";

export const postImages = async (files = []) => {
  let formData = new FormData();
  files.forEach((file) => {
    formData.append("images", file);
  });
  const res = await axios.post(POST_IMAGES_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
