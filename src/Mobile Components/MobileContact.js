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
        color:'#C0B6A5',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.0em'
        }
    }
}));

const MobileContact = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant={"h5"}  className={classes.headerTitle}> {/*wrap*/}
                Contact Information
            </Typography>
            <Typography variant={"h6"} className={classes.headerDescription}>
                <br/>
                James Spitz
                <br/>
                6632 Stepping Stone Circle
                <br/>
                53590 Sun Prairie, Wisconsin
                <br/>
                james.spitz1@gmail.com
                <br/>
                (+1) 608-333-4397
            </Typography>
        </>
    )
};

export default MobileContact;
