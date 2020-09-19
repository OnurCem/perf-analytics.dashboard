import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMetrics as getMetricsRequest, GetMetricsResponse } from 'api/dashboardApi';
import { AppThunk } from 'common/store';

type DashboardState = GetMetricsResponse;

const initialState: DashboardState = {
  metrics: [],
};

const dashboardSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    getMetrics(state, action: PayloadAction<GetMetricsResponse>) {
      const { metrics } = action.payload;

      // eslint-disable-next-line no-param-reassign
      state.metrics = metrics;
    },
  },
});

const { getMetrics } = dashboardSlice.actions;

export const fetchMetrics = (startDate?: string, endDate?: string): AppThunk => async (dispatch) => {
  try {
    const response = await getMetricsRequest(startDate, endDate);

    dispatch(getMetrics(response.data as GetMetricsResponse));
  } catch (error) {
    // TODO Handle error
  }
};

export default dashboardSlice.reducer;
