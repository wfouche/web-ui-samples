// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

// https://recharts.org/en-US/examples

import {
    Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const data0 = [
    {
      name: 'CIN 1', Approved: 3490, Declined: 4300, amt: 2100,
    },
    {
        name: 'CIN 2', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'CIN 3', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'CIN 4', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'CIN 5', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'CIN 6', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'CIN 7', Approved: 4000, Declined: 2400, amt: 2400,
      },
      {
        name: 'CIN 8', Approved: 3000, Declined: 1398, amt: 2210,
      },
      {
        name: 'CIN 9', Approved: 2000, Declined: 9800, amt: 2290,
      },
      {
        name: 'CIN 10', Approved: 2780, Declined: 3908, amt: 2000,
      },
      {
        name: 'CIN 11', Approved: 1890, Declined: 4800, amt: 2181,
      },
      {
        name: 'CIN 12', Approved: 2390, Declined: 3800, amt: 2500,
      },
      {
        name: 'CIN 13', Approved: 3490, Declined: 4300, amt: 2100,
      },
            
  ];

  
const data1 = [
    {
      name: 'PSP 1', Approved: 4000, Declined: 2400, amt: 2400,
    },
    {
      name: 'PSP 2', Approved: 3000, Declined: 1398, amt: 2210,
    },
    {
      name: 'PSP 3', Approved: 2000, Declined: 9800, amt: 2290,
    },
    {
      name: 'PSP 4', Approved: 2780, Declined: 3908, amt: 2000,
    },
    {
      name: 'PSP 5', Approved: 1890, Declined: 4800, amt: 2181,
    },
    {
      name: 'PSP 6', Approved: 2390, Declined: 3800, amt: 2500,
    },
    {
      name: 'PSP 7', Approved: 3490, Declined: 4300, amt: 2100,
    },
    {
      name: 'PSP 7', Approved: 3490, Declined: 4300, amt: 2100,
    },
    {
        name: 'PSP 8', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'PSP 9', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'PSP 10', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'PSP 11', Approved: 3490, Declined: 4300, amt: 2100,
      },
      {
        name: 'PSP 12', Approved: 3490, Declined: 4300, amt: 2100,
      },
          
  ];

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

export default () => (
    
    <Card>
        <CardHeader title="Return Code Analysis" />
        <CardContent>
        <LineChart
        width={1500}
        height={300}
        data={data0}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Declined" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Approved" stroke="#82ca9d" />
      </LineChart>

      <LineChart
        width={1500}
        height={300}
        data={data1}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Declined" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Approved" stroke="#82ca9d" />
      </LineChart>

      <BarChart
        width={1500}
        height={300}
        data={data0}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Approved" stackId="a" fill="#8884d8" />
        <Bar dataKey="Declined" stackId="a" fill="#82ca9d" />
      </BarChart>

    </CardContent>
    </Card>
);