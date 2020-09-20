import { AxiosPromise } from 'axios';

import { makeRequest } from 'utils/httpUtil';

export interface GetMetricsResponse {
  metrics: {
    name: string;
    values: {
      duration: number;
      measureTime: string;
      resourceName?: string;
    }[];
  }[];
}

export const getMetrics = (startDate?: string, endDate?: string): AxiosPromise =>
  makeRequest({
    method: 'GET',
    url: '/collect/metric',
    params: {
      startDate,
      endDate,
    },
  });
