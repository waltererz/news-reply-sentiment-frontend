import constants from "../../constants";

const initialStates = {
    route: constants.route.default,
};

function app(state = initialStates, action) {
    switch (action.type) {
        case constants.redux.app.route:
            return { ...state, route: action.state };
            break;
    }

    return state;
}

export default app;
