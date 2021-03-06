import React from 'react';
import DesignServicesRoundedIcon from '@material-ui/icons/DesignServicesRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import Container from '../system/Container';
import * as common from '../services/common';

export default function Home() {
    common.init();

    return (
        <Container
            submenus={[
                {
                    name: '서비스 소개',
                    path: '/app/introduction',
                    icon: <DesignServicesRoundedIcon />,
                },
                {
                    name: '뉴스댓글여론 분석기',
                    path: '/analytics',
                    icon: <BubbleChartRoundedIcon />,
                },
            ]}
        >
            첫 페이지
        </Container>
    );
}
