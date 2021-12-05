import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Line,
    XAxis
}
from 'recharts'

const data = [
    {date:'01-02-2021' ,physical:0.99, emotional:0.5, intellectual:-0.25},
    {date:'05-02-2021', physical:0.99, emotional:0.15, intellectual:-0.55},
    {date:'09-02-2021' ,physical:0.99, emotional:0.35, intellectual:-0.35},
]
function BiorythmChart(){
    
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data = {data}>
                <XAxis dataKey="date" />
                <Line dataKey="physical" stroke="green" />
                <Line dataKey="emotional" />
                <Line dataKey="intellectual" />
            </LineChart>
        </ResponsiveContainer>

    )

}

export default BiorythmChart;