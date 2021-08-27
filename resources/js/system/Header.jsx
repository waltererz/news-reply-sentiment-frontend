import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import HeaderNavigation from './HeaderNavigation';
import config from '../config';

export default function Header() {
    const refAppBar = React.useRef(null);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                refAppBar.current.classList.add('shadow');
            } else {
                refAppBar.current.classList.remove('shadow');
            }
        });
    }, []);

    return (
        <AppBar
            position="fixed"
            ref={refAppBar}
            sx={{
                backgroundColor: '#ffffff',
                background: config('templete.gradient.primary'),
                boxShadow: 'none',
                transition: 'box-shadow 1s ease-out',
                zIndex: config('templete.zIndex.headerAppBar'),

                '&.shadow': {
                    boxShadow: config('templete.boxShadow.2'),
                },
            }}
        >
            <HeaderNavigation />
        </AppBar>
    );
}
