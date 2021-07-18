import { APP_ROUTE } from '../Constants';

export const changeRoute = (route) => {
    return {
        type: APP_ROUTE,
        state: route,
    };
};
