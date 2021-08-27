const routes = {
    '/': {
        tabName: 'home',
        component: 'Home',
        title: '첫 페이지',
    },

    app: {
        tabName: 'app',
        component: 'App',
        title: '뉴스댓글 여론분석 서비스',
        children: {
            introduction: {
                title: '서비스 소개',
            }
        }
    },

    analytics: {
        tabName: 'analytics',
        component: 'Analytics',
        title: '뉴스댓글 여론분석',
        children: {
            history: {
                title: '뉴스댓글 여론분석 과거통계',
            },
            add: {
                title: '뉴스댓글 여론분석을 위한 URL 추가',
            },
        }
    },

    user: {
        tabName: 'user',
        component: 'User',
        title: '마이페이지',
        children: {
            signup: {
                title: '회원가입',
            },
            signin: {
                title: '회원로그인',
            },
            signout: {
                title: '로그아웃',
            }
        },
    },
}

export default routes;