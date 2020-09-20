import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: null,
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: null,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export type LineChartData = [number, number];

interface LineChartProps {
  data: LineChartData[];
  seriesName: string;
}

export default ({ data, seriesName }: LineChartProps): JSX.Element => (
  <div className="line-chart-container">
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    <HighchartsReact highcharts={Highcharts} options={{ ...options, series: [{ name: seriesName, data }] }} />
  </div>
);
