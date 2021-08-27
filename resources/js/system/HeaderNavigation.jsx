import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import config from '../config';
import navigationLinks from './navigationLinks';
import { setMobileDrawer } from '../redux/Actions/App';

export default function HeaderNavigation() {
    const mobileDrawerOpen = useSelector((state) => state.app.mobileDrawerOpen);
    const dispatch = useDispatch();

    const ref = {
        container: React.useRef(null),
        subContainer: React.useRef(null),
    };

    const toggleMobileDrawer = () => {
        dispatch(setMobileDrawer(!mobileDrawerOpen));
    };

    React.useEffect(() => {
        if (ref.subContainer.current.offsetWidth > ref.container.current.offsetWidth) {
            ref.container.current.classList.add('scrolling');
        }
    }, []);

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    padding: '10px',
                    width: '100%',
                    fontFamily: config('templete.fontFamily.1'),

                    height: {
                        xs: config('templete.height.headerAppBar.mobile'),
                        md: config('templete.height.headerAppBar.desktop'),
                    },
                }}
            >
                <Box
                    onClick={toggleMobileDrawer}
                    sx={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexGrow: 0,
                        flexShrink: 0,
                        width: '40px',
                        fontSize: '1rem',
                        cursor: 'pointer',

                        display: {
                            xs: 'flex',
                            md: 'none',
                        },
                    }}
                >
                    <MenuRoundedIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexGrow: 0,
                        flexShrink: 0,

                        marginRight: {
                            xs: '30px',
                            md: '40px',
                        },
                    }}
                >
                    <Box
                        component="span"
                        onClick={() => {
                            window.location.href = '/';
                        }}
                        sx={{
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: '1rem',
                                md: '1.1rem',
                            },
                        }}
                    >
                        NewsReply
                    </Box>
                </Box>
                <Box
                    component="ul"
                    ref={ref.container}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexShrink: 1,
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        whiteSpace: 'nowrap',
                        listStyle: 'none',
                        width: '100%',
                        height: '100%',
                        margin: '0px',
                        padding: '0px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',

                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    <Box
                        ref={ref.subContainer}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexShrink: 0,
                            flexWrap: 'nowrap',
                        }}
                    >
                        {navigationLinks.map((item, index) => {
                            return (
                                <Box
                                    component="li"
                                    key={`headerNavigation-${index}`}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        boxSizing: 'border-box',
                                        color: '#ffffff',

                                        fontSize: {
                                            xs: '0.9rem',
                                            md: '1rem',
                                        },

                                        marginRight: {
                                            xs: '20px',
                                            md: '20px',
                                        },

                                        '&:last-of-type': {
                                            marginRight: '0px',
                                        },

                                        '& a': {
                                            display: 'block',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            opacity: '0.8',
                                            webkitTapHighlightColor: 'transparent',
                                            userSelect: 'none',
                                            transition:
                                                'opacity 0.3s ease-out, transform 0.1s ease-out',

                                            '&:hover': {
                                                opacity: '1',
                                            },

                                            '&:active': {
                                                transform: 'scale(0.9, 0.9)',
                                            },
                                        },
                                    }}
                                >
                                    {'standalone' in item && item.standalone === true ? (
                                        <MuiLink href={item.path}>{item.name}</MuiLink>
                                    ) : (
                                        <Link to={item.path}>{item.name}</Link>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}
