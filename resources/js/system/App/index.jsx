import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import * as RoutePage from "../../routes";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={RoutePage.Home} />
                    <Route path="/user" component={RoutePage.User} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
