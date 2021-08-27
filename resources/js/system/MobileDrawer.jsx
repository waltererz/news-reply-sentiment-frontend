import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { setMobileDrawer } from '../redux/Actions/App';
import config from '../config';
import navigationLinks from './navigationLinks';

export default function MobileDrawer() {
    const mobileDrawerOpen = useSelector((state) => state.app.mobileDrawerOpen);
    const [mobileDrawerSubMenuOpen, setMobileDrawerSubMenuOpen] = React.useState({});
    const dispatch = useDispatch();

    const toggleMobileDrawer = () => {
        dispatch(setMobileDrawer(!mobileDrawerOpen));
    };

    return (
        <Drawer
            anchor="left"
            open={mobileDrawerOpen}
            onClose={toggleMobileDrawer}
            sx={{
                '& .MuiPaper-root': {
                    width: config('templete.width.drawer.mobile'),
                    backgroundColor: '#000000',
                    padding: '10px',
                    color: '#ffffff',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    padding: '10px',
                    marginBottom: '20px',
                }}
            >
                <Box
                    sx={{
                        marginRight: '20px',

                        '& .MuiAvatar-root': {
                            width: '56px',
                            height: '56px',
                        },

                        '& svg': {
                            width: '32px',
                            height: '32px',
                        },
                    }}
                >
                    <Avatar>
                        <PersonRoundedIcon />
                    </Avatar>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        fontSize: '1.2em',
                        textAlign: 'center',

                        '& a': {
                            fontFamily: config('templete.fontFamily.1'),
                            color: '#dddddd',
                            textDecoration: 'none',
                        },
                    }}
                >
                    <MuiLink href="/user/signin">로그인을 해주세요.</MuiLink>
                </Box>
            </Box>
            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    listStyle: 'none',
                    padding: '0px',
                    margin: '0px',
                }}
            >
                {navigationLinks.map((item, index) => {
                    if (!(item.slug in mobileDrawerSubMenuOpen)) {
                        setMobileDrawerSubMenuOpen({
                            ...mobileDrawerSubMenuOpen,
                            [item.slug]: false,
                        });
                    }

                    return (
                        <Box
                            component="li"
                            className={
                                'children' in item && mobileDrawerSubMenuOpen[item.slug]
                                    ? 'has-children'
                                    : ''
                            }
                            key={`mobileDrawerLink-${index}`}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                fontFamily: 'Nanum Gothic',
                                marginBottom: '15px',

                                '&.has-children': {
                                    marginBottom: '25px',
                                },

                                '& a': {
                                    color: 'inherit',
                                    textDecoration: 'none',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: mobileDrawerSubMenuOpen[item.slug]
                                        ? '8px'
                                        : '0px',

                                    '& a': {
                                        fontSize: '1rem',
                                    },
                                }}
                            >
                                {'children' in item ? (
                                    <KeyboardArrowDown
                                        sx={{
                                            width: '34px',
                                            transition: '0.2s',
                                            cursor: 'pointer',
                                            transform: mobileDrawerSubMenuOpen[item.slug]
                                                ? 'rotate(-180deg)'
                                                : 'rotate(0)',
                                        }}
                                        onClick={() => {
                                            setMobileDrawerSubMenuOpen({
                                                ...mobileDrawerSubMenuOpen,
                                                [item.slug]: !mobileDrawerSubMenuOpen[item.slug],
                                            });
                                        }}
                                    />
                                ) : (
                                    <Box sx={{ width: '34px' }}></Box>
                                )}
                                {'standalone' in item && item.standalone === true ? (
                                    <MuiLink href={item.path}>{item.name}</MuiLink>
                                ) : (
                                    <Link to={item.path} onClick={toggleMobileDrawer}>
                                        {item.name}
                                    </Link>
                                )}
                            </Box>
                            {'children' in item && mobileDrawerSubMenuOpen[item.slug] && (
                                <Box
                                    component="ol"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        listStyle: 'none',
                                        margin: '0px 0px 0px 34px',
                                        padding: '0px',
                                    }}
                                >
                                    {item.children.map((subitem, subindex) => {
                                        return (
                                            <Box
                                                component="li"
                                                key={`mobileDrawerSubLink-${index}-${subindex}`}
                                                sx={{
                                                    marginBottom: '10px',

                                                    '&:last-of-type': {
                                                        marginBottom: '0px',
                                                    },

                                                    '& a': {
                                                        fontSize: '0.9rem',
                                                    },
                                                }}
                                            >
                                                {'standalone' in subitem &&
                                                subitem.standalone === true ? (
                                                    <MuiLink href={subitem.path}>
                                                        {subitem.name}
                                                    </MuiLink>
                                                ) : (
                                                    <Link
                                                        to={subitem.path}
                                                        onClick={toggleMobileDrawer}
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}
                        </Box>
                    );
                })}
            </Box>
        </Drawer>
    );
}
