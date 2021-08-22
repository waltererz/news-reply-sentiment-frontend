import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import * as Page from '../pages';
import * as KakaoService from '../services/Kakao';

/**
 * 각종 소셜로그인 기능에 따라 서비스에 로그인되었는지 확인 (5초마다)
 */
const checkOAuthTokens = () => {
    KakaoService.check();
};

checkOAuthTokens();
setInterval(checkOAuthTokens, 1000);

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/user" component={Page.User} />
            </Switch>
        </Layout>
    );
}
