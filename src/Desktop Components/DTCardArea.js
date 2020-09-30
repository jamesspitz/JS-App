import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import DTSampleCard from "./DTSampleCard";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    cardDiv: {
        maxWidth:'100%',
        position:'relative',
        textAlign:'center',
    },

    headerTitle: {
        color:'#FFF7EB',
        [theme.breakpoints.down("sm")]: {
            fontSize:'1.3em'
        }
    },
}));

const DTCardArea = () => {
    const classes = useStyles();
    return(
        <div>
            <Typography variant={"h5"} className={classes.headerTitle}> Past Projects</Typography>
            <br/><br/>
            <div className={classes.cardDiv}>
                <DTSampleCard />
            </div>
            <br/><br/>
        </div>
    )
};

export default DTCardArea;
