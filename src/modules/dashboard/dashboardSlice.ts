import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { startAction, stopAction } from 'common/commonSlice';
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

export const { getMetrics } = dashboardSlice.actions;

export const fetchMetrics = (startDate?: string, endDate?: string): AppThunk => async (dispatch) => {
  try {
    dispatch(startAction({ actionName: getMetrics.type }));

    const response = await getMetricsRequest(startDate, endDate);

    dispatch(getMetrics(response.data as GetMetricsResponse));
    dispatch(stopAction({ actionName: getMetrics.type }));
  } catch (error) {
    dispatch(stopAction({ actionName: getMetrics.type }));
    // TODO Handle error
  }
};

export default dashboardSlice.reducer;
