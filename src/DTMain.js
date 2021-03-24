import React from 'react';
import DTTopBar from "./Desktop Components/DTTopBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import DTBackground from "./Desktop Components/DTBackground";
import DTAbout from "./Desktop Components/DTAbout";
import DTContact from "./Desktop Components/DTContact";
import DTResume from "./Desktop Components/DTResume";
import Github from "./Images/github.png"
import LinkedIn from "./Images/linkedin.png"
import Email from "./Images/email.png"
import DTCardArea from "./Desktop Components/DTCardArea";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    introProfile: {
        textAlign:'center',
        justifyContent:'center',
        width:'100%',
        [theme.breakpoints.down("xl")]: {
            paddingTop:'9em',
        },
        [theme.breakpoints.down("lg")]: {
            paddingTop:'6em',
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop:'5em',
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop:'3em',
        }
    },
    gridContainerStyle: {
        height: '100vh',
    },
    aboutMeContainer: {
        backgroundColor: '#343536',
    },
    aboutMeBio: {
        color:'white',
        padding:'5%',
    },
    contactMeContainer: {
        backgroundColor: '#343536',
        color:'white',
    },
    contactMe: {
        paddingLeft:'1em',
        padding:'5%',
        paddingTop:'1%',

    },
    downloadResume: {
        padding:'5%',
        paddingTop:'1%',
    },
    iconGHEM: {
        minWidth:  '100px',
        minHeight: '100px',
        maxWidth:'25%',
        '&:hover': {
            borderRadius: '50%',
            color: 'rgba(0, 0, 0, 0.3)',
            boxShadow: '.1em .1em 3em  rgba(200, 200, 200, 0.5)',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth:  '70px',
            minHeight: '70px',
        },
    },
    iconLI: {
        minWidth:  '100px',
        minHeight: '100px',
        maxWidth:'25%',
        '&:hover': {
            color: 'rgba(0, 0, 0, 0.3)',
            boxShadow: '.1em .1em 3em  rgba(200, 200, 200, 0.5)',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth:  '70px',
            minHeight: '70px',
        },
    },
    iconContainer : {
        backgroundColor: '#343536',
        height: '30vh',
        maxWidth:'60%',
        [theme.breakpoints.down("md")]: {
            maxWidth:'80%',
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth:'100%',
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth:'100%',
        }
    }
}));


const DTMain = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <DTTopBar/>
            <DTBackground/>
            <Grid container alignItems={"center"} justify={"flex-start"} direction={'column'} className={classes.aboutMeContainer}>
                <Grid className={classes.aboutMeBio} item xs={12} sm={11} md={9} lg={7}>
                    <DTAbout/> {/*DTAbout Me Description Section*/}
                </Grid>
            </Grid>
            <Grid container alignItems={"center"} justify={"flex-start"} direction={'column'} className={classes.aboutMeContainer}>
                <DTCardArea />
            </Grid>
            <Grid container alignItems={"baseline"} justify={"center"} direction={'row'} className={classes.contactMeContainer}>
                <Grid className={classes.contactMe} item xs={6} sm={5} md={4} lg={3}>
                    <DTContact/> {/*MobileContact information*/}
                </Grid>
                <Grid className={classes.downloadResume} item xs={6} sm={5} md={4} lg={3}>
                    <DTResume/>
                </Grid>
            </Grid>

            <div style={{textAlign: 'center', width:'100%', display:'flex', justifyContent:'center', backgroundColor: '#343536',}}>
            <Grid container alignItems={"flex-start"} justify={"space-between"} direction={'row'} className={classes.iconContainer}>
                <Grid item xs={6} sm={3} md={3} lg={3} >
                   <img onClick={event =>  window.open('https://github.com/jamesspitz', '_blank')} style={{cursor: 'pointer'}} src={Github} alt={"Github"} className={classes.iconGHEM}/>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <img onClick={event =>  window.open('https://www.linkedin.com/in/jimmy-spitz-552a8b17a/', '_blank')} style={{cursor: 'pointer'}} src={LinkedIn} alt={"LinkedIn"} className={classes.iconLI}/>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <img onClick={event =>  window.open("mailto:james.spitz1@gmail.com")} src={Email} style={{cursor: 'pointer'}} alt={"Email"} className={classes.iconGHEM}/>
                </Grid>
            </Grid>
            </div>
        </div>
    );
};

export default DTMain;
