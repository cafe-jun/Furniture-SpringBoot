import axios, { CancelToken } from "axios";
import define from "../config/envSetting";
import { getCookie } from "../cookie";

export const apiWithoutInterceptor = axios.create({
  baseURL: define.API_BASE_URL,
  // client 와 server 가 쿠키 값을 공유하기위해 withCredentials = true 값을 사용
  withCredentials: true,
});

export const apiClient = axios.create({
  baseURL: define.API_BASE_URL,
});

export const networkService = {
  setupInterceptors: (handleDirectToIntroPage) => {
    apiClient.interceptors.request.use(
      (config) => {
        config.headers = {
          Authorization: `Bearer ${getCookie("access_token")}`,
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // // response
    apiClient.interceptors.response.use(
      (response) => {
        /*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다. 
        .then() 으로 이어집니다.
    */
        return response;
      },

      (error) => {
        /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.    
    */
        console.log("axios error message :", error.message);
        console.log("error ::", error.response.data);
        // const status = error.response.status
        const { code } = error.response.data;
        handleDirectToIntroPage();
        return Promise.reject(error);
      }
    );
  },
};
