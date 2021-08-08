import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GoogleIcon from '@material-ui/icons/Google';

class Signin extends React.Component {
    render() {
        const SignInKakao = () => {
            Kakao.Auth.authorize({
                redirectUri: 'http://newsreply.erzsphilos.com/oauth/kakao',
            });
        };

        return (
            <div className="user-login-form">
                <h4 className="form-title">회원 로그인</h4>
                <div className="form-contents">
                    <form method="post" action="/user/login">
                        <div className="input">
                            <TextField
                                id="user-email"
                                name="email"
                                label="이메일"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="input">
                            <TextField
                                id="user-password"
                                name="password"
                                type="password"
                                label="패스워드"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="input">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disableElevation
                                fullWidth
                            >
                                로그인
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="social-login">
                    <h4 className="social-title">소셜계정 로그인</h4>
                    <div className="item facebook">
                        <div className="icon">
                            <FacebookIcon />
                        </div>
                        <div className="text">페이스북 계정으로 로그인</div>
                    </div>
                    <div className="item twitter">
                        <div className="icon">
                            <TwitterIcon />
                        </div>
                        <div className="text">트위터 계정으로 로그인</div>
                    </div>
                    <div className="item naver">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <polygon points="16.116 12.807 7.546 0.54 0.443 0.54 0.443 23.46 7.884 23.46 7.884 11.193 16.454 23.46 23.557 23.46 23.557 0.54 16.116 0.54 16.116 12.807" />
                            </svg>
                        </div>
                        <div className="text">네이버 계정으로 로그인</div>
                    </div>
                    <div className="item kakao" onClick={SignInKakao}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,.744C5.851.744.25,4.828.25,9.866c0,3.132,2.034,5.9,5.132,7.537l-1.3,4.785a.481.481,0,0,0,.736.516l5.714-3.79c.482.047.973.073,1.471.073,6.49,0,11.75-4.083,11.75-9.121S18.49.744,12,.744" />
                            </svg>
                        </div>
                        <div className="text">카카오 계정으로 로그인</div>
                    </div>
                    <div className="item google">
                        <div className="icon">
                            <GoogleIcon />
                        </div>
                        <div className="text">구글 계정으로 로그인</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;
