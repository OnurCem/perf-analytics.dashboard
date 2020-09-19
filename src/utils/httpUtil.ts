import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export const makeRequest = (config: AxiosRequestConfig): AxiosPromise =>
  axios({
    ...config,
    baseURL: 'http://localhost:8080/', // TODO Get from env variable
  });
