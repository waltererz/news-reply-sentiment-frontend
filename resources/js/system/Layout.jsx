import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HideOnScroll from '../components/HideOnScroll';
import config from '../config';

export default function Layout({ children }) {
    const route = useSelector((state) => state.app.route);

    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <HideOnScroll breakpoint={config('templete.breakpoints.values.md')} timeout={500}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: '#ffffff',
                        background:
                            'linear-gradient(0deg, rgba(70, 67, 122, 1) 0%, rgba(73, 70, 128, 1) 35%, rgba(73, 70, 128, 1) 65%, rgba(70, 67, 122, 1) 100%)',
                        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <Box>
                        <Tabs
                            value={route}
                            centered={true}
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab
                                icon={<HomeIcon />}
                                value={config('app.route.home')}
                                component={Link}
                                to="/"
                            />
                            <Tab
                                icon={<AccountCircle />}
                                value={config('app.route.user')}
                                component={Link}
                                to="/user"
                            />
                        </Tabs>
                    </Box>
                </AppBar>
            </HideOnScroll>
            <Grid
                container
                sx={{
                    padding: {
                        xs: '58px 0px 0px 0px',
                        md: '58px 10px 0px 10px',
                    },
                    flexWrap: 'nowrap',
                    height: '3000px',
                }}
            >
                {children}
            </Grid>
        </ThemeProvider>
    );
}
