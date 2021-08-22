const routes = {
    '/': {
        tabName: 'home',
        component: 'Home',
        title: '첫 페이지',
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