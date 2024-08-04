// const API_URL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:8000/api"
//     : "https://sh-haimin.cn/api";

const API_URL = "https://sh-haimin.cn/api";
export const GET_LOGIN_AUTH_URL = `${API_URL}/login/get_user_auth`;
export const POST_IMAGES_URL = `${API_URL}/projects/upload_images`;
export const POST_VIDEOS_URL = `${API_URL}/projects/upload_videos`;
export const POST_PROJECT_URL = `${API_URL}/projects/upload_project`;
export const EDIT_PROJECT_URL = `${API_URL}/projects/edit_project`;
export const GET_PROJECT_URL = `${API_URL}/projects/get_projects`;
export const DELETE_PROJECT_URL = `${API_URL}/projects/delete_project`;
export const SEND_MESSAGES_URL = `${API_URL}/contact/send_messages`;
export const GET_MESSAGES_URL = `${API_URL}/contact/get_messages`;
