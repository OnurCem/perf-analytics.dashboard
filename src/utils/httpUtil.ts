import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

// eslint-disable-next-line import/no-unresolved
import { API_URL } from '@environment';

export const makeRequest = (config: AxiosRequestConfig): AxiosPromise =>
  axios({
    ...config,
    baseURL: API_URL as string,
  });
