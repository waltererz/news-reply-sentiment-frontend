import reduxConstants from '../constants';

export const setRoute = (tab) => {
    return {
        type: reduxConstants.app.route,
        state: tab,
    };
};

export const setTitle = (title) => {
    return {
        type: reduxConstants.app.title,
        state: title,
    };
};

export const setURI = (uri) => {
    return {
        type: reduxConstants.app.uri,
        state: uri,
    };
};

export const setMobileDrawer = (open) => {
    return {
        type: reduxConstants.app.mobileDrawerOpen,
        state: open,
    }
}