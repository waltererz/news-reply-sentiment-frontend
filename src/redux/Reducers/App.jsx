import { APP_ROUTE } from '../Constants';

const initialStates = {
    route: 0,
};

function app(state = initialStates, action) {
    switch (action.type) {
        case APP_ROUTE:
            return { ...state, route: action.state };
            break;
    }

    return state;
}

export default app;
