import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import Dashboard from 'modules/dashboard/Dashboard';
import { getMetrics, fetchMetrics } from 'modules/dashboard/dashboardSlice';
import { isActionsProcessing } from 'common/commonSelectors';
import { RootState } from 'common/rootReducer';
import { METRIC_NAMES } from 'constants/metricContants';

const selectMetrics = (state: RootState) => state.dashboard.metrics;
const selectMetricsForDashboard = createSelector([selectMetrics], (metrics) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedMetrics: Record<string, any[]> = {};

  metrics.forEach((metric) => {
    mappedMetrics[metric.name] =
      metric.name === METRIC_NAMES.RESOURCE
        ? metric.values
        : metric.values.map((metricValue) => [new Date(metricValue.measureTime).getTime(), metricValue.duration]);
  });

  return mappedMetrics;
});

const mapStateToProps = (state: RootState) => ({
  metrics: selectMetricsForDashboard(state),
  loading: isActionsProcessing(state, getMetrics.type),
});

const mapDispatchToProps = { fetchMetrics };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
