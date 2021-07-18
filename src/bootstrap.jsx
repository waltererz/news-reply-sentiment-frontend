import axios from 'axios';
import App from './components/App';
import Layout from './components/Layout';
import * as Routes from './routes';
import theme from './components/Theme';

const J2KB = Object.seal({
    App: null,
    Layout: null,
    Route: null,
    theme: null,
});

const bootstrap = () => {
    axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
    axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
    axios.defaults.withCredentials = true;

    J2KB.App = App;
    J2KB.Layout = Layout;
    J2KB.Route = Routes;
    J2KB.theme = theme;

    return J2KB;
};

export default bootstrap;
