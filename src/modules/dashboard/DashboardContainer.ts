import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Serie } from '@nivo/line';

import Dashboard from 'modules/dashboard/Dashboard';
import { fetchMetrics } from 'modules/dashboard/dashboardSlice';
import { RootState } from 'common/rootReducer';

const selectMetrics = (state: RootState) => state.dashboard.metrics;
const selectMetricsForDashboard = createSelector([selectMetrics], (metrics) => {
  const mappedMetrics: Record<string, Serie[]> = {};

  metrics.forEach((metric) => {
    mappedMetrics[metric.name] = [
      {
        id: metric.name,
        data: metric.values.map((metricValue) => ({
          x: metricValue.measureTime,
          y: metricValue.duration,
        })),
      },
    ];
  });

  return mappedMetrics;
});

const mapStateToProps = (state: RootState) => ({
  metrics: selectMetricsForDashboard(state),
});

const mapDispatchToProps = { fetchMetrics };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
