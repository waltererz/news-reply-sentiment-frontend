import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Component from '../../component';

class Layout extends Component {
    render() {
        const J2KB = this.J2KB;
        return (
            <ThemeProvider theme={J2KB.theme}>
                <div className="j2kb">
                    <AppBar className="header-navigation" position="fixed">
                        <Toolbar className="header-toolbar">
                            <Typography className="header-title">News</Typography>
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
