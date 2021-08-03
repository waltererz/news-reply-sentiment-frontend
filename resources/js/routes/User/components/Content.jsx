import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

export default class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/user" component={RoutePage.Home} />
                <Route exact path="/user/signin" component={RoutePage.Signin} />
                <Route exact path="/user/signup" component={RoutePage.Signup} />
            </Switch>
        );
    }
}
