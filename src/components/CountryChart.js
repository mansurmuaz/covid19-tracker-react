import React from 'react';
import {PieChart, Pie, Legend, Cell} from 'recharts';

const COLORS = ['#0088fe', '#c40000', '#328800'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const countryChart = (props) => {
    const {data} = props;

    const pieData = [
        {
            name: 'Cases',
            value: data?.confirmed.value
        },
        {
            name: 'Deaths',
            value: data?.deaths.value
        },
        {
            name: 'Recovered',
            value: data?.recovered.value
        },
    ]


    return (
        <PieChart width={800} height={350}>
            <Pie
                data={pieData}
                dataKey='value'
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
            >
                {
                    pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Legend verticalAlign="top" height={36}/>
        </PieChart>
    )
}

export default countryChart;