const navigationLinks = [
    {
        name: '뉴스댓글 여론분석기',
        path: '/app',
        slug: 'app',
        children: [
            {
                name: '서비스 소개',
                path: '/app/introduction',
                slug: 'introduction',
            },
        ],
    },
    {
        name: '나의 여론분석',
        path: '/analytics',
        slug: 'analytics',
        children: [
            {
                name: '여론분석 URL 추가',
                path: '/analytics/add',
                slug: 'analytics_add',
            },
            {
                name: '과거 여론분석 통계',
                path: '/analytics/history',
                slug: 'analytics_history',
            },
        ],
    },
    {
        name: '문의하기',
        path: 'https://newsreply.channel.io',
        slug: 'contact',
        standalone: true,
    },
];

export default navigationLinks;