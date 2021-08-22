import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../system/Container';
import * as Page from './User/pages';
import * as common from '../services/common';
import '../../sass/routes/user.scss';

export default function User() {
    common.init();

    return (
        <Container submenus="왼쪽">
            <Switch>
                <Route exact path="/user" component={Page.Home} />
                <Route exact path="/user/signin" component={Page.SignIn} />
                <Route exact path="/user/signup" component={Page.SignUp} />
            </Switch>
        </Container>
    );
}
