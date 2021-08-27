import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
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
                        width: config('templete.width.drawer.desktop'),
                        height: '100%',
                        backgroundColor: '#ffffff',
                        border: '0px',
                        zIndex: config('templete.zIndex.desktopDrawer'),
                        boxSizing: 'border-box',
                        boxShadow: config('templete.boxShadow.1'),

                        paddingTop: {
                            md:
                                'calc(' +
                                config('templete.height.headerAppBar.desktop') +
                                ' + 10px)',
                        },
                    },
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        backgroundColor: '#ffffff',

                        '& .MuiListItemButton-root': {
                            borderRadius: '5px',
                        },
                    }}
                >
                    {typeof submenus == 'object'
                        ? submenus.map((item, index) => {
                              return (
                                  <ListItem key={`submenu-${index}`}>
                                      <ListItemButton component={Link} to={item.path}>
                                          <ListItemAvatar>
                                              <Avatar>{item.icon}</Avatar>
                                          </ListItemAvatar>
                                          <ListItemText primary={item.name} />
                                      </ListItemButton>
                                  </ListItem>
                              );
                          })
                        : ''}
                </List>
            </Drawer>
            <Grid
                item
                sx={{
                    width: config('templete.width.drawer.desktop'),
                    paddingRight: '20px',
                    flexGrow: 0,
                    boxSizing: 'border-box',
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
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
