import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import introImage from '../Images/mountain.jpg';
import Profile from "./DTProfile";
import FadeIn from 'react-fade-in';


const useStyles = makeStyles((theme) => ({
    backgroundDiv: {
        maxWidth:'100%',
        width:'100%',
        zIndex:'-1',
        minHeight:'100vh',
        backgroundImage:`url(${introImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        position:'relative',
        textAlign:'center',
    }
}));

const DTBackground = () => {
    const classes = useStyles();
    return(
        <div className={classes.backgroundDiv}>
            <FadeIn>
            <Profile />
            </FadeIn>
        </div>
    )
};

export default DTBackground;
