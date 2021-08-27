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
    React.useEffect(() => {
        (function () {
            var w = window;
            if (w.ChannelIO) {
                return (window.console.error || window.console.log || function () {})(
                    'ChannelIO script included twice.',
                );
            }
            var ch = function () {
                ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args) {
                ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') {
                l();
            } else if (window.attachEvent) {
                window.attachEvent('onload', l);
            } else {
                window.addEventListener('DOMContentLoaded', l, false);
                window.addEventListener('load', l, false);
            }
        })();

        ChannelIO('boot', {
            pluginKey: 'e3ce5769-e77f-410a-a001-53147f83732c',
        });
    }, []);

    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/app" component={Page.App} />
                <Route path="/analytics" component={Page.Analytics} />
                <Route path="/user" component={Page.User} />
            </Switch>
        </Layout>
    );
}
