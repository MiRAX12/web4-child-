import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9001",
});
//
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
//
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       const refreshToken =
//         localStorage.getItem("refreshToken");
//       if (!refreshToken) {
//         // logout
//         localStorage.clear();
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }
//       try {
//         const res = await axios.post(
//           "http://localhost:9001/auth/refresh",
//           { refreshToken }
//         );
//         const newAccess = res.data.accessToken;
//         localStorage.setItem("accessToken", newAccess);
//         originalRequest.headers.Authorization =
//           `Bearer ${newAccess}`;
//         return api(originalRequest);
//       } catch (e) {
//         localStorage.clear();
//         window.location.href = "/login";
//         return Promise.reject(e);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;