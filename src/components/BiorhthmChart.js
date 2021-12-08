import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Line,
    XAxis
}
from 'recharts'
import './BiorhythmChart.css';
// const data = [
//     {date:'01-02-2021' ,physical:0.99, emotional:0.5, intellectual:-0.25},
//     {date:'05-02-2021', physical:0.99, emotional:0.15, intellectual:-0.55},
//     {date:'09-02-2021' ,physical:0.99, emotional:0.35, intellectual:-0.35},
// ]

function BiorythmChart({data}){
    
    return (
        <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
            <LineChart data = {data}>
                <XAxis dataKey="date" />
                
                <Line className="physical" type="natural" dot={false} 
                dataKey="physical"  />
                
                <Line className="emotional" type="natural" dot={false} 
                dataKey="emotional" />
                
                <Line className="intellectual" type="natural" dot={false} 
                dataKey="intellectual" />
            </LineChart>
        </ResponsiveContainer>

    )

}

export default BiorythmChart;