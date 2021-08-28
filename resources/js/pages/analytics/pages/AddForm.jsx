import React from 'react';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import MuiPaper from '@material-ui/core/Paper';
import Alert from '@material-ui/core/Alert';
import Link from '@material-ui/core/Link';
import Paper from '../../../components/Paper';
import config from '../../../config';

export default function AddForm() {
    const ref = {
        url: React.useRef(null),
    };

    const data = [
        {
            id: 1,
            subject: '바이든 "코로나 정보 차단 中, 끝까지 밝혀낼 것" 맹비난',
            url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=104&oid=014&aid=0004699339',
            created_at: 'timestamp',
        },
        {
            id: 2,
            subject: '평택 미군 기지서 코로나19 확진자 11명 추가 발생',
            url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=100&oid=003&aid=0010688444',
            created_at: 'timestamp',
        },
        {
            id: 3,
            subject: '50대 1차 백신 접종 오늘 마무리…접종률 약 80%',
            url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=102&oid=437&aid=0000274831',
            created_at: 'timestamp',
        },
        {
            id: 4,
            subject: '코로나 백신 접종 완료율 28%...OECD 대부분 30% 이상',
            url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=105&oid=029&aid=0002694132',
            created_at: 'timestamp',
        },
        {
            id: 5,
            subject: '[뉴스쉽] 보건소 "잘 몰라" 질병청 "통화 중"…백신 궁금하면 드루와',
            url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=103&oid=055&aid=0000917499',
            created_at: 'timestamp',
        },
    ];

    return (
        <Paper>
            <Alert
                severity="info"
                sx={{
                    marginBottom: '40px',
                }}
            >
                현재 남은 요청가능 횟수는 00회입니다.
            </Alert>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    marginBottom: '30px',
                    maxWidth: {
                        xs: 'none',
                        md: '600px',
                    },
                }}
            >
                <TextField
                    fullWidth
                    ref={ref.url}
                    label="새로 추가할 URL"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                    }}
                />
                <Button
                    variant="contained"
                    disableElevation
                    sx={{
                        width: '200px',
                        height: '56px',
                        marginLeft: '15px',
                        fontSize: '1rem',
                        fontFamily: config('templete.fontFamily.1'),
                    }}
                >
                    URL 추가하기
                </Button>
            </Box>
            <Box
                sx={{
                    marginBottom: '20px',
                    fontFamily: config('templete.fontFamily.1'),
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                현재까지 추가된 뉴스기사 URL은 아래와 같습니다. 목록에서 아이템을 삭제하더라도
                요청가능 횟수가 늘어나지 않으니 삭제 전에는 신중히 고려하시기 바랍니다.
            </Box>
            <TableContainer
                component={MuiPaper}
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <Table sx={{ minWidth: '650px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">순번</TableCell>
                            <TableCell>뉴스제목</TableCell>
                            <TableCell align="center">추가한 날짜</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => {
                            return (
                                <TableRow
                                    key={`news_items-${index}`}
                                    sx={{
                                        '&:last-of-type td, &:last-of-type th': { border: 0 },
                                    }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {item.id}
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            sx={{
                                                color: config('templete.palette.primary.main'),
                                                opacity: '0.8',
                                                fontWeight: 'bold',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.5s ease-out',

                                                '&:hover': {
                                                    opacity: '1',
                                                },

                                                '&:active': {
                                                    opacity: '0.8',
                                                },
                                            }}
                                        >
                                            {item.subject}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">{item.created_at}</TableCell>
                                    <TableCell align="center">삭제</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
