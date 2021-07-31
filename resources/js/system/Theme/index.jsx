import { createTheme } from "@material-ui/core/styles";

const breakpointValue = {
    xs: 0,
    sm: 1024,
    md: 1160,
    lg: 1440,
    xl: 1600,
};

const theme = createTheme({
    breakpoints: {
        values: breakpointValue,
    },
    overrides: {
        MuiToolbar: {
            gutters: {
                paddingLeft: "initial",
                paddingRight: "initial",
                "@media (min-width: 1024px)": {
                    paddingLeft: "initial",
                    paddingRight: "initial",
                },
            },
        },
    },
});

export default theme;
