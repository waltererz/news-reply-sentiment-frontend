const _config = {
    palette: {
        primary: {
            main: '#6a02ff',
        },

        secondary: {
            main: '#005dff',
        },

        bgColor: {
            main: '#fafafa',
        },

        kakao: {
            main: '#fee500',
        },

        naver: {
            main: '#03c75a',
        },

        google: {
            main: '#ea4335',
        },

        facebook: {
            main: '#1877f2',
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 1024,
            md: 1160,
            lg: 1366,
            xl: 1440,
        },
    },

    width: {
        primary: {
            desktop: '1024px',
            mobile: '1024px',
        },

        secondary: {
            desktop: '300px',
            mobile: '300px',
        },

        drawer: {
            desktop: '320px',
            mobile: '280px',
        }
    },

    height: {
        headerAppBar: {
            desktop: '60px',
            mobile: '50px',
        },
    },

    margin: {
        default: {
            desktop: '20px',
            mobile: '10px',
        }
    },

    zIndex: {
        desktopDrawer: 900,
        headerAppBar: 1190,
        mobileNavigation: 1190,
    },

    border: {
        1: '1px solid #eeeeee',
    },

    borderRadius: {
        1: '4px',
        2: '6px',
    },

    boxShadow: {
        1: '0 2px 5px 1px rgba(0, 0, 0, 0.15)',
        2: '0 2px 5px 1px rgba(0, 0, 0, 0.30)',
    },

    gradient: {
        primary: 'linear-gradient(90deg, rgba(106,2,255,1) 0%, rgba(0,93,255,1) 100%)',
        secondary: 'linear-gradient(0deg, rgba(70, 67, 122, 1) 0%, rgba(73, 70, 128, 1) 35%, rgba(73, 70, 128, 1) 65%, rgba(70, 67, 122, 1) 100%)',
        silver: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(247, 247, 247, 1) 40%, rgba(254, 254, 254, 1) 100%)',
    },

    fontFamily: {
        1: 'Noto Sans KR',
    }
}

export default _config;