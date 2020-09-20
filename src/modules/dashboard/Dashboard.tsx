import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'antd';
import { Serie } from '@nivo/line';

import Page from 'components/page/Page';
import LineChart from 'components/chart/LineChart';
import { METRIC_NAMES } from 'constants/metricContants';

import 'modules/dashboard/dashboard.scss';

const CHARTS = [METRIC_NAMES.TTFB, METRIC_NAMES.FCP, METRIC_NAMES.DOM_LOAD, METRIC_NAMES.WINDOW_LOAD];
const CHART_TITLES = {
  [METRIC_NAMES.TTFB]: 'TTFB',
  [METRIC_NAMES.FCP]: 'FCP',
  [METRIC_NAMES.DOM_LOAD]: 'DOM Load',
  [METRIC_NAMES.WINDOW_LOAD]: 'Window Load',
};

const TABLE_COLUMNS = [
  {
    title: 'Resource',
    dataIndex: 'resourceName',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
  },
];

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
            <Col key={metricName} xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
              <Card title={CHART_TITLES[metricName]}>{chartData && <LineChart data={chartData} />}</Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Table rowKey="resourceName" dataSource={metrics[METRIC_NAMES.RESOURCE]} columns={TABLE_COLUMNS} />
      </Row>
    </Page>
  );
};
