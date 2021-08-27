import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Label,
    LabelList,
    Brush,
} from 'recharts';

export default function History() {
    const data = [
        { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
        { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
        { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
        { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
        { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
        { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
        { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
    ];

    return (
        <LineChart width={400} height={400} data={data} syncId="test">
            <CartesianGrid stroke="#f5f5f5" fill="#e6e6e6" />
            <XAxis type="number" dataKey="pv" height={40} label="레이블">
                <Label value="x" position="insideBottom" />
            </XAxis>
            <YAxis type="number" unit="%" width={80}>
                <Label value="y" position="insideLeft" angle={90} />
            </YAxis>
            <Tooltip trigger="click" />
            <Line key="uv" type="monotone" dataKey="uv" stroke="#ff7300" strokeDasharray="3 3">
                <LabelList position="bottom" offset={10} dataKey="name" />
            </Line>
            <Brush dataKey="name" height={30} />
        </LineChart>
    );
}
