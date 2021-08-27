import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import Container from '../system/Container';
import * as Page from './analytics/pages';
import * as common from '../services/common';

export default function Analytics() {
    common.init();

    return (
        <Container
            submenus={[
                { name: 'URL 추가', path: '/analytics/add', icon: <PlaylistAddRoundedIcon /> },
                { name: '여론분석 통계', path: '/analytics/history', icon: <HistoryRoundedIcon /> },
            ]}
        >
            <Switch>
                <Route exact path="/analytics" component={Page.Home} />
                <Route path="/analytics/history" component={Page.History} />
                <Route path="/analytics/add" component={Page.AddForm} />
            </Switch>
        </Container>
    );
}
