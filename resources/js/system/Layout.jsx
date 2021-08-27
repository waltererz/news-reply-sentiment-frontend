import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import MobileNavigation from './MobileNavigation';
import config from '../config';

export default function Layout({ children }) {
    return (
        <ThemeProvider
            theme={createTheme({
                palette: config('templete.palette'),
                breakpoints: config('templete.breakpoints'),
            })}
        >
            <MobileDrawer />
            <Header />
            <Grid
                container
                sx={{
                    flexWrap: 'nowrap',
                    height: '3000px',

                    paddingTop: {
                        xs: 'calc(' + config('templete.height.headerAppBar.mobile') + ' + 10px)',
                        md: 'calc(' + config('templete.height.headerAppBar.desktop') + ' + 10px)',
                    },

                    paddingLeft: {
                        xs: '0px',
                        md: '10px',
                    },

                    paddingRight: {
                        xs: '0px',
                        md: '10px',
                    },
                }}
            >
                {children}
            </Grid>
            <MobileNavigation />
        </ThemeProvider>
    );
}
