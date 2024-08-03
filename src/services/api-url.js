const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://sh-haimin.cn/api";
export const GET_LOGIN_AUTH_URL = `${API_URL}/login/get_user_auth`;
export const POST_IMAGES_URL = `${API_URL}/projects/upload_images`;
export const POST_PROJECT_URL = `${API_URL}/projects/upload_project`;
export const GET_PROJECT_URL = `${API_URL}/projects/get_projects`;
export const DELETE_PROJECT_URL = `${API_URL}/projects/delete_project`;
