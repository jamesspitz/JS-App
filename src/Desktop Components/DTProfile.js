import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import profileImage from '../Images/ProfilePicture1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '21em',
        borderRadius: '50%',
        [theme.breakpoints.down("sm")]: {
            transform:'scale(0.7,0.7)'
        },
    },
    profileDiv: {
        position: 'relative',
        verticalAlign: 'middle',
        display: 'inline-block',
        marginTop:'5em'
    },
    nameIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'2em',
            marginTop:'0.4em',
        },
        marginTop:'1em',
        color:'white',
        paddingTop: '5px'

    },
    universityIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        color:'white',
        paddingTop:'5px',
        paddingLeft: '5px',
        paddingRight: '5px',

    },
    degreeIntro: {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.2em'
        },
        paddingTop:'.5em',
        color:'white',
        paddingBottom:'5px'
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={classes.profileDiv}>
            <img className={classes.root} src={profileImage} alt={'UWMadison'}/>
            <div style={{flex: 10, justifyContent: 'center', backgroundColor: '#2F4F4F', paddingHorizontal: 30, boxShadow: "10px 10px 20px black",
                borderRadius: 5, paddingBottom: '10px' }}>
                <Typography variant={"h4"} className={classes.nameIntro}>
                        James Spitz
                </Typography>
            </div>
            <br/>
            <div style={{flex: 10, justifyContent: 'center', backgroundColor: '#b80007', paddingHorizontal: 30, boxShadow: "10px 10px 20px black", borderRadius: 5 }}>
            <Typography variant={"h6"} className={classes.universityIntro}>
                University of Wisconsin-Madison
            </Typography>
            <Typography variant={"subtitle1"} className={classes.degreeIntro}>
                B.S. Computer Science '19
            </Typography>
            </div>
            <br/>
        </div>
    );
}
