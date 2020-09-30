import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.3em'
        }
    },
    headerDescription : {
        [theme.breakpoints.down("sm")]: {
            fontSize:'1em'
        },
        color:'#C0B6A5'
    },
    languagesImage : {
        height:'100%',
        width:'90%'
    }
}));

const DTAbout = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant={"h5"} className={classes.headerTitle}>
                About Me
            </Typography>

            <Typography variant={"h6"} className={classes.headerDescription}>
                <br/>
                I recently graduated from the University of Wisconsin-Madison with a B.S. for Computer Science.
                I am currently working on developing an online storefront with React-Native and building the database with PostgreSQL.
                My primary interests are full stack web technologies.
                <br/>
            </Typography>

        </>
    )
};

export default DTAbout;
