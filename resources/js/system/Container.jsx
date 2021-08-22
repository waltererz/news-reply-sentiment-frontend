import React from 'react';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import config from '../config';

export default function Container({ submenus, children }) {
    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    position: 'fixed',

                    display: {
                        xs: 'none',
                        md: 'flex',
                    },

                    width: config('templete.width.drawer.desktop'),

                    '& .MuiPaper-root': {
                        display: 'flex',
                        backgroundColor: config('templete.palette.bgColor.main'),
                        border: '0px',
                        zIndex: config('templete.zIndex.drawer'),
                        boxSizing: 'border-box',
                        transition:
                            'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, height 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',

                        width: config('templete.width.drawer.desktop'),

                        height: {
                            md:
                                'calc(100vh - ' +
                                config('templete.height.headerFixed.desktop') +
                                ')',
                        },

                        marginTop: {
                            md:
                                'calc(' +
                                config('templete.height.headerFixed.desktop') +
                                ' + 10px)',
                        },

                        marginLeft: '10px',

                        paddingRight: '20px',
                    },
                }}
            >
                {submenus}
            </Drawer>
            <Grid
                item
                sx={{
                    width: '320px',
                    paddingRight: '20px',
                    flexGrow: 0,
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                    boxSizing: 'border-box',
                }}
            ></Grid>
            <Grid
                item
                sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    boxSizing: 'border-box',
                }}
            >
                {children}
            </Grid>
        </React.Fragment>
    );
}
