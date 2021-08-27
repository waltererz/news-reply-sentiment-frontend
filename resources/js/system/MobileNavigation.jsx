import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import config from '../config';

export default function MobileNavigation() {
    const route = useSelector((state) => state.app.route);

    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                bottom: '0px',
                boxShadow: config('templete.boxShadow.1'),
                zIndex: config('templete.zIndex.mobileNavigation'),

                display: {
                    xs: 'block',
                    md: 'none',
                },
            }}
        >
            <BottomNavigation
                value={route}
                sx={{
                    justifyContent: 'space-evenly',

                    '& .MuiButtonBase-root': {
                        padding: '0px',

                        '&.Mui-selected': {
                            padding: '0px',
                        },
                    },
                }}
            >
                <BottomNavigationAction
                    value={config('app.route.home')}
                    component={Link}
                    to="/"
                    icon={<HomeRoundedIcon />}
                />
                <BottomNavigationAction
                    value={config('app.route.user')}
                    component={Link}
                    to="/user"
                    icon={<AccountCircleRoundedIcon />}
                />
            </BottomNavigation>
        </Box>
    );
}
