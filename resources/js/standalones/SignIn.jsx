import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GoogleIcon from '@material-ui/icons/Google';
import * as common from '../services/common';

export default function SignIn() {
    common.init();

    const SignInKakao = () => {
        Kakao.Auth.authorize({
            redirectUri: 'http://newsreply.erzsphilos.com/oauth/kakao',
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '450px',
                    width: '100%',
                }}
            >
                <Box
                    component="h4"
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                    }}
                >
                    회원 로그인
                </Box>
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <form method="post" action="/user/login">
                        <Box
                            sx={{
                                margin: '15px',
                            }}
                        >
                            <TextField
                                id="user-email"
                                name="email"
                                label="이메일"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Box
                            sx={{
                                margin: '15px',
                            }}
                        >
                            <TextField
                                id="user-password"
                                name="password"
                                type="password"
                                label="패스워드"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Box
                            sx={{
                                margin: '15px',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disableElevation
                                fullWidth
                            >
                                로그인
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        margin: '10px 0px 30px 0px',

                        '& .item': {
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            height: '50px',
                            boxSizing: 'border-box',
                            marginBottom: '10px',
                            alignItems: 'center',
                            borderRadius: '5px',
                            cursor: 'pointer',

                            '&:last-of-type': {
                                marginBottom: '0px',
                            },

                            '& .icon': {
                                width: '50px',
                                height: '30px',
                                flexGrow: 0,
                                flexShrink: 0,
                                boxSizing: 'border-box',
                                borderRight: '1px solid rgba(245, 245, 245, 0.3)',
                                padding: '3px 0px',
                                textAlign: 'center',

                                '& svg': {
                                    width: '1em',
                                    height: '1em',
                                    display: 'inline-block',
                                    fontSize: '1.5rem',
                                    flexShrink: 0,
                                    userSelect: 'none',
                                    fill: '#ffffff',
                                    color: '#ffffff',
                                },
                            },

                            '& .text': {
                                flexGrow: '1',
                                fontSize: '1.1em',
                                fontWeight: 'bold',
                                boxSizing: 'border-box',
                                paddingLeft: '15px',
                                color: '#ffffff',
                            },

                            '&.facebook': {
                                backgroundColor: 'rgba(24, 119, 242, 0.8)',

                                '&:hover': {
                                    backgroundColor: 'rgba(24, 119, 242, 1)',
                                },
                            },

                            '&.twitter': {
                                backgroundColor: 'rgba(26, 145, 218, 0.8)',

                                '&:hover': {
                                    backgroundColor: 'rgba(26, 145, 218, 1)',
                                },
                            },

                            '&.naver': {
                                backgroundColor: 'rgba(3, 199, 90, 0.8)',

                                '&:hover': {
                                    backgroundColor: 'rgba(3, 199, 90, 1)',
                                },
                            },

                            '&.kakao': {
                                backgroundColor: 'rgba(255, 205, 0, 0.8)',

                                '&:hover': {
                                    backgroundColor: 'rgba(255, 205, 0, 1)',
                                },
                            },

                            '&.google': {
                                backgroundColor: 'rgba(234, 67, 53, 0.8)',

                                '&:hover': {
                                    backgroundColor: 'rgba(234, 67, 53, 1)',
                                },
                            },
                        },
                    }}
                >
                    <Box
                        component="h4"
                        sx={{
                            fontSize: '1.5em',
                            textAlign: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        소셜계정 로그인
                    </Box>
                    <Box className="item facebook">
                        <Box className="icon">
                            <FacebookIcon />
                        </Box>
                        <Box className="text">페이스북 계정으로 로그인</Box>
                    </Box>
                    <Box className="item twitter">
                        <Box className="icon">
                            <TwitterIcon />
                        </Box>
                        <Box className="text">트위터 계정으로 로그인</Box>
                    </Box>
                    <Box className="item naver">
                        <Box className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <polygon points="16.116 12.807 7.546 0.54 0.443 0.54 0.443 23.46 7.884 23.46 7.884 11.193 16.454 23.46 23.557 23.46 23.557 0.54 16.116 0.54 16.116 12.807" />
                            </svg>
                        </Box>
                        <Box className="text">네이버 계정으로 로그인</Box>
                    </Box>
                    <Box className="item kakao" onClick={SignInKakao}>
                        <Box className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,.744C5.851.744.25,4.828.25,9.866c0,3.132,2.034,5.9,5.132,7.537l-1.3,4.785a.481.481,0,0,0,.736.516l5.714-3.79c.482.047.973.073,1.471.073,6.49,0,11.75-4.083,11.75-9.121S18.49.744,12,.744" />
                            </svg>
                        </Box>
                        <Box className="text">카카오 계정으로 로그인</Box>
                    </Box>
                    <Box className="item google">
                        <Box className="icon">
                            <GoogleIcon />
                        </Box>
                        <Box className="text">구글 계정으로 로그인</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
