import { Switch, Route } from 'react-router-dom';
import Component from '../../component';

class App extends Component {
    render() {
        const J2KB = this.J2KB;
        return (
            <J2KB.Layout instance={J2KB}>
                <Switch>
                    <Route exact path="/" component={J2KB.Route.Home} />
                </Switch>
            </J2KB.Layout>
        );
    }
}

export default App;
