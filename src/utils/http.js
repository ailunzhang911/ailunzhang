
import axios from 'axios';
// 创建 axios 实例
const http = axios.create({
   baseURL: 'http://localhost:5000', // API 的 base URL
   timeout: 3000, // 请求超时时间
   
});

http.interceptors.request.use((config) => {
    return config;
  },(error) => {
    return Promise.reject(error);
  });

http.interceptors.response.use((response) => {
    // 对响应数据做些什么
    return response.data;
  },(error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  });
export { http }; // 改为命名导出