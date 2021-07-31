import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import theme from "../Theme";

class Layout extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="j2kb">
                    <AppBar className="header-navigation" position="fixed">
                        <Toolbar className="header-toolbar">
                            <Typography className="header-title">
                                News
                            </Typography>
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    component={Link}
                                    to="/user/login"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Container className="j2kb-container" maxWidth={false}>
                        <Grid className="inner-container" container>
                            <Grid className="ls" item>
                                왼쪽
                            </Grid>
                            <Grid className="rs" item>
                                {this.props.children}
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </ThemeProvider>
        );
    }
}

export default Layout;
