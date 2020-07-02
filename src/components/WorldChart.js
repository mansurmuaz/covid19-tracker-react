import React from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Bar } from 'recharts';

const worldChart = (props) => {
    const { data } = props;

    return (
        <ComposedChart width={730} height={300} data={data}
                   margin={{ top: 0, right: 10, left: 30, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff00004d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar yAxisId="right" barSize={1} type="monotone" name="New Cases" dataKey="newCases" stroke="#b5b5b552" />
            <Area yAxisId="left" type="monotone" name="Total Cases" dataKey="totalCases" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area yAxisId="left" type="monotone" name="Total Deaths" dataKey="totalDeaths" stroke="#ff0000" fillOpacity={1} fill="url(#colorPv)" />
        </ComposedChart>
    )
}

export default worldChart;