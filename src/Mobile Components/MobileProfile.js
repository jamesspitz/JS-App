import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import profileImage from '../Images/ProfilePicture1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '21em',
        borderRadius: '50%',
        [theme.breakpoints.down("sm")]: {
            transform:'scale(0.6,0.6)'
        },
        [theme.breakpoints.up("md")]: {
            transform:'scale(1,1)',
            marginTop:'4em'
        },
    },
    profileDiv: {
        position: 'relative',
        verticalAlign: 'middle',
        display: 'inline-block',
        marginTop:'8%',
    },
    nameIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'2em',
            marginTop:'0.4em',
        },
        marginTop:'2em',
        color:'white',
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,
    },
    universityIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        color:'white',
        paddingTop:'1em',
    },
    degreeIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        paddingTop:'1em',
        color:'white',
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={classes.profileDiv}>
            <img className={classes.root} src={profileImage} alt={'UWMadison'}/>
            <Typography variant={"h4"} className={classes.nameIntro}>
                James Spitz
            </Typography>
            <div style={{flex: 10, justifyContent: 'center', backgroundColor: '#b80007', paddingHorizontal: 30, boxShadow: "10px 10px 20px black", borderRadius: 5 }}>
                <Typography variant={"h6"} className={classes.universityIntro}>
                    University of Wisconsin-Madison<br/>
                </Typography>
                <Typography variant={"subtitle1"} className={classes.degreeIntro}>
                    B.S. Computer Science '19
                </Typography>
            </div>
        </div>
    );
}
