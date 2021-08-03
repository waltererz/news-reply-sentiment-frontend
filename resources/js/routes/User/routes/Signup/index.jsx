import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GoogleIcon from '@material-ui/icons/Google';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default class Signup extends React.Component {
    render() {
        return (
            <div className="user-signup-form">
                <h4 className="form-title">회원가입</h4>
                <div className="social-login">
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="signup-by-social-content"
                            id="signup-by-social-header"
                            className="accordion-summary"
                        >
                            <Typography className="social-title">
                                소셜계정으로 간편하게 회원가입
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="item facebook">
                                <div className="icon">
                                    <FacebookIcon />
                                </div>
                                <div className="text">페이스북 계정으로 회원가입</div>
                            </div>
                            <div className="item twitter">
                                <div className="icon">
                                    <TwitterIcon />
                                </div>
                                <div className="text">트위터 계정으로 회원가입</div>
                            </div>
                            <div className="item naver">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <polygon points="16.116 12.807 7.546 0.54 0.443 0.54 0.443 23.46 7.884 23.46 7.884 11.193 16.454 23.46 23.557 23.46 23.557 0.54 16.116 0.54 16.116 12.807" />
                                    </svg>
                                </div>
                                <div className="text">네이버 계정으로 회원가입</div>
                            </div>
                            <div className="item kakao">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,.744C5.851.744.25,4.828.25,9.866c0,3.132,2.034,5.9,5.132,7.537l-1.3,4.785a.481.481,0,0,0,.736.516l5.714-3.79c.482.047.973.073,1.471.073,6.49,0,11.75-4.083,11.75-9.121S18.49.744,12,.744" />
                                    </svg>
                                </div>
                                <div className="text">카카오 계정으로 회원가입</div>
                            </div>
                            <div className="item google">
                                <div className="icon">
                                    <GoogleIcon />
                                </div>
                                <div className="text">구글 계정으로 회원가입</div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="form-contents">
                    <Grid container direction="column" className="input-form">
                        <form id="input-user-signup">
                            <Grid item className="input-item">
                                <TextField
                                    id="input-user-email"
                                    name="email"
                                    label="이메일 주소 *"
                                    variant="outlined"
                                    helperText="이메일 주소는 계정 아이디로 사용됩니다."
                                    type="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item className="input-item">
                                <TextField
                                    id="input-user-password"
                                    name="password"
                                    label="패스워드 *"
                                    variant="outlined"
                                    helperText="사용할 패스워드를 정확하게 입력하세요. (영문 대소문자, 숫자, 특수문자 포함 12자 이상)"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item className="input-item">
                                <TextField
                                    id="input-user-password-confirm"
                                    label="패스워드 확인 *"
                                    variant="outlined"
                                    helperText="위에서 입력한 패스워드를 다시 한 번 입력해주세요.)"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid container direction="row" className="input-item">
                                <Grid item xs={6}>
                                    <TextField
                                        id="input-user-firstname"
                                        name="firstname"
                                        label="이름 *"
                                        variant="outlined"
                                        helperText="본인의 이름을 입력하세요."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        id="input-user-lastname"
                                        name="lastname"
                                        label="성 *"
                                        variant="outlined"
                                        helperText="본인의 성을 입력하세요."
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid item className="input-item button">
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<AssignmentIndIcon />}
                                    disableElevation
                                >
                                    회원가입
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </div>
        );
    }
}
