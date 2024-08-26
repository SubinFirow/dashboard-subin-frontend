"use client";
import axios from "axios";

export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");

export const setUserId = (id) => localStorage.setItem("userId", id);
export const getUserId = () => localStorage.getItem("userId");

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASEURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleResponse = (response) => {
  return response.data;
};

const handleError = (error) => {
  if (error.response) {
    return Promise.reject(error.response.data);
  } else if (error.request) {
    return Promise.reject(error.request);
  } else {
    return Promise.reject(error.message);
  }
};

export const login = (user) => {
  return axiosInstance
    .post(`/auth/login`, user)
    .then(handleResponse)
    .catch(handleError);
};

export const getData = (page, limit) => {
  return axiosInstance
    .get(`/api/data?page=${page}&limit=${limit}`)
    .then(handleResponse)
    .catch(handleError);
};

export const getFilterData = (sector, country, topic) => {
  return axiosInstance
    .post(`/api/filterData`, { sector, country, topic })
    .then(handleResponse)
    .catch(handleError);
};
