import React from 'react';
import { ResponsiveLine, LineSvgProps } from '@nivo/line';

import 'components/chart/line-chart.scss';

export default ({ data }: LineSvgProps): JSX.Element => (
  <div className="line-chart-container">
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 10, bottom: 100, left: 50 }}
      xScale={{ type: 'time', format: '%Y-%m-%dT%H:%M:%S.%L%Z' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      axisTop={null}
      axisRight={null}
      xFormat="time:%Y-%m-%dT%H:%M:%S.%L%Z"
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 90,
        tickValues: 'every 1 minute',
        format: '%d.%m.%Y %H:%M',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh
    />
  </div>
);
