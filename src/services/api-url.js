const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://sh-haimin.cn/api";
export const GET_LOGIN_AUTH_URL = `${API_URL}/login/get_user_auth`;
