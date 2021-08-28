import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '../../../components/Paper';
import config from '../../../config';

export default function History() {
    const colors = ['#00c7a3', '#bb0000'];

    const data = [
        [
            { name: '긍정적', value: 400 },
            { name: '부정적', value: 300 },
        ],
        [
            { name: '긍정적', value: 200 },
            { name: '부정적', value: 300 },
        ],
        [
            { name: '긍정적', value: 100 },
            { name: '부정적', value: 300 },
        ],
        [
            { name: '긍정적', value: 600 },
            { name: '부정적', value: 300 },
        ],
        [
            { name: '긍정적', value: 10000 },
            { name: '부정적', value: 300 },
        ],
    ];

    return (
        <Paper>
            <Grid container rowSpacing={10}>
                {data.map((item, index) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            xl={4}
                            key={`graph-${index}`}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    fontFamily: config('templete.fontFamily.1'),
                                }}
                            >
                                뉴스기사 여론동향 {index + 1}
                            </Box>
                            <PieChart width={400} height={300} key={`graph-${index}`}>
                                <Pie
                                    data={item}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {item.map((entry, subindex) => (
                                        <Cell
                                            key={`cell-${index}-${subindex}`}
                                            fill={colors[subindex % colors.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                            <Box
                                sx={{
                                    marginTop: '20px',
                                    fontSize: '0.8rem',
                                    fontFamily: config('templete.fontFamily.1'),
                                    color: '#cccccc',
                                }}
                            >
                                최종 분석일: 2021년 00월 00일
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
}
