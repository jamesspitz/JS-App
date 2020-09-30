import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBarCollapse from "../Shared Components/AppBarCollapse";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor:'#2F4F4F'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        color:'white'
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color:'white'
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    }}
));



const MobileTopBar = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Yoon Cho
                </Typography>
                <AppBarCollapse />
            </Toolbar>
        </AppBar>
    )
};

export default MobileTopBar;
