import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      message.error('未授权，请重新登录');
    } else if (status === 403) {
      message.error('拒绝访问');
    } else if (status === 404) {
      message.error('请求资源不存在');
    } else if (status === 500) {
      message.error('服务器错误');
    } else {
      message.error(error.message || '请求失败');
    }
    return Promise.reject(error);
  }
);

export default service;
export type { AxiosRequestConfig, AxiosResponse };
