import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {name: 'Jan', uv: 400, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 300, pv: 1398, amt: 2210},
  // Add more data points
];

const Charts = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Charts;
