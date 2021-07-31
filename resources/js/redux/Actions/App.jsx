import constants from "../../constants";

export const changeRoute = (route) => {
    return {
        type: constants.redux.app.route,
        state: route,
    };
};
