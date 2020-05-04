import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    z-index: -100;
`;

const renderLineChart = (props) => {
    console.log(props.data);
    return(
        <Wrapper>
        <ResponsiveContainer width="95%" height={400}>
            <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Deaths" stroke="#fc0324" />
            <Line type="monotone" dataKey="Confirmed" stroke="#0394fc" />
            <Line type="monotone" dataKey="Recovered" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="graphDate" />
            <YAxis />
            <Tooltip />
        </LineChart>
        </ResponsiveContainer>
        </Wrapper>
    )
};

export default renderLineChart;