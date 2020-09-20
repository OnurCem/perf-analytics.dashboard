import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Empty, DatePicker, Divider } from 'antd';
import { Serie } from '@nivo/line';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Moment } from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RangeValue } from 'rc-picker/lib/interface';

import Page from 'components/page/Page';
import LineChart from 'components/chart/LineChart';
import { METRIC_NAMES } from 'constants/metricContants';

import 'modules/dashboard/dashboard.scss';

const { RangePicker } = DatePicker;

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
  loading: boolean;
}

export default ({ fetchMetrics, metrics, loading }: DashboardProps): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState([] as string[]);

  useEffect(() => {
    const [startDate, endDate] = selectedDateRange;

    fetchMetrics(startDate, endDate);
  }, [fetchMetrics, selectedDateRange]);

  const handleDateChange = (values: RangeValue<Moment>): void => {
    const [startDate, endDate] = values ? (values as Moment[]) : [];

    if (startDate && endDate) {
      setSelectedDateRange([startDate.toISOString(), endDate.toISOString()]);
    } else {
      setSelectedDateRange([]);
    }
  };

  return (
    <Page>
      <Row>
        <RangePicker onChange={handleDateChange} showTime />
      </Row>
      <Divider />
      <Row gutter={[24, 24]} justify="center">
        {CHARTS.map((metricName) => {
          const chartData = metrics[metricName];

          return (
            <Col key={metricName} xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
              <Card title={CHART_TITLES[metricName]} loading={loading}>
                {chartData ? <LineChart data={chartData} /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Table
          rowKey="measureTime"
          dataSource={metrics[METRIC_NAMES.RESOURCE]}
          columns={TABLE_COLUMNS}
          loading={loading}
        />
      </Row>
    </Page>
  );
};
