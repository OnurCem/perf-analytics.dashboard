import React, { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Serie } from '@nivo/line';

import Page from 'components/page/Page';
import LineChart from 'components/chart/LineChart';
import { METRIC_NAMES } from 'constants/metricContants';

const CHARTS = [METRIC_NAMES.TTFB, METRIC_NAMES.FCP, METRIC_NAMES.DOM_LOAD, METRIC_NAMES.WINDOW_LOAD];
const CHART_TITLES = {
  [METRIC_NAMES.TTFB]: 'TTFB',
  [METRIC_NAMES.FCP]: 'FCP',
  [METRIC_NAMES.DOM_LOAD]: 'DOM Load',
  [METRIC_NAMES.WINDOW_LOAD]: 'Window Load',
};

interface DashboardProps {
  fetchMetrics: (startDate?: string, endDate?: string) => void;
  metrics: Record<string, Serie[]>;
}

export default ({ fetchMetrics, metrics }: DashboardProps): JSX.Element => {
  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return (
    <Page>
      <Row gutter={[24, 24]} justify="center">
        {CHARTS.map((metricName) => {
          const chartData = metrics[metricName];

          return (
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
              <Card key={metricName} title={CHART_TITLES[metricName]}>
                {chartData && <LineChart data={chartData} />}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Page>
  );
};
