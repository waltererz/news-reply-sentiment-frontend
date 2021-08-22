import reduxConstants from '../constants';
import config from '../../config';

const initialStates = {
    title: null,
    route: config('app.route.home'),
    uri: '/',
};

function app(state = initialStates, action) {
    switch (action.type) {
        case reduxConstants.app.route:
            return { ...state, route: action.state };
            break;
        case reduxConstants.app.title:
            return { ...state, title: action.state };
            break;
        case reduxConstants.app.uri:
            return { ...state, uri: action.state };
            break;
    }

    return state;
}

export default app;
