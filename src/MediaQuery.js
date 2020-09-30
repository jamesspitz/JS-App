 import React from 'react';
import DTMain from "./DTMain";
import { useMediaQuery } from 'react-responsive'
import MobileMain from "./MobileMain";
import {createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            md: 640
        },
    },
});
const useStyles = makeStyles(() => ({
    styleWrapper: {
        overflowX:'auto',
        position:'relative'
    }
}));

const MediaQuery = () => {
    const classes = useStyles();
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    return (
        <div>
            {(isTabletOrMobileDevice) ?<div className={classes.styleWrapper}><MuiThemeProvider theme={theme}><MobileMain /></MuiThemeProvider></div> : <DTMain/>}
        </div>
    );
}

export default MediaQuery;
