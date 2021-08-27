import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DesignServicesRoundedIcon from '@material-ui/icons/DesignServicesRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import Container from '../system/Container';
import * as Page from './app/pages';
import * as common from '../services/common';

export default function App() {
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
            <Switch>
                <Route exact path="/app" component={Page.Home} />
                <Route path="/app/introduction" component={Page.Introduction} />
            </Switch>
        </Container>
    );
}
