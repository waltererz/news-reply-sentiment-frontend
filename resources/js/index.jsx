import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './system/App';
import Reducers from './redux/Reducers';
import * as StandAlone from './standalones';

axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/user/signup" component={StandAlone.SignUp} />
                <Route path="/user/signin" component={StandAlone.SignIn} />
                <Route path="/user/signout" component={StandAlone.SignOut} />

                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
