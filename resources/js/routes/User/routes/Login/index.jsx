import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GoogleIcon from '@material-ui/icons/Google';

class Login extends React.Component {
    render() {
        return (
            <div class="user-login-form">
                <h4 class="form-title">회원 로그인</h4>
                <div class="form-contents">
                    <form method="post" action="/user/login">
                        <div class="input">
                            <TextField
                                id="user-email"
                                name="email"
                                label="이메일"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div class="input">
                            <TextField
                                id="user-password"
                                name="password"
                                type="password"
                                label="패스워드"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div class="input">
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
                <div class="social-login">
                    <h4 class="social-title">소셜계정 로그인</h4>
                    <div class="item facebook">
                        <div class="icon">
                            <FacebookIcon />
                        </div>
                        <div class="text">페이스북 계정으로 로그인</div>
                    </div>
                    <div class="item twitter">
                        <div class="icon">
                            <TwitterIcon />
                        </div>
                        <div class="text">트위터 계정으로 로그인</div>
                    </div>
                    <div class="item naver">
                        <div class="icon">N</div>
                        <div class="text">네이버 계정으로 로그인</div>
                    </div>
                    <div class="item kakao">
                        <div class="icon">K</div>
                        <div class="text">카카오 계정으로 로그인</div>
                    </div>
                    <div class="item google">
                        <div class="icon">
                            <GoogleIcon />
                        </div>
                        <div class="text">구글 계정으로 로그인</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
