import React from 'react';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import desktopImage from "../Images/WUD_App/WUDSiteSample.png";
import mobileImage from "../Images/WUD_App/WUDMobileSample.png";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import dbImage from "../Images/WUD_App/DBLayoutWUD.png";
import {CardMedia} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    media :{
        height: 160,
        display: "inline-block",
        textAlign: "center"

    },
    cardBody : {
        flexDirection: "row",
    },
    detailsImage : {
      maxWidth: 320,
    },
    mobileImage :{
        maxHeight:160,
        display: "inline-block",
        paddingLeft: 70,
        textAlign: "center"
    }
}));

export default function DTSampleCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

            <Card className={classes.root} style={{backgroundColor: '#C0B6A5',}}>
                <CardContent>
                    <Typography variant={"h5"} className={classes.headerTitle} >WUD Film App</Typography>
                    <div className={classes.cardBody}>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        An app designed to present screen times and movie
                        information in an easy to view format for customers.
                    </Typography>
                    </div>
                </CardContent>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor: '#FFF7EB',}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Abstract</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="textSecondary" component="p">
                            WUD Film, a student organization affiliated with the Wisconsin Union, runs the Marquee
                            theatre in Union South. They screen an average of 5 different films for a total of 9 screenings per weekend.
                            The committee needs a more effective method to present and communicate film events and
                            information to potential audience members.
                            <br/><br/>
                            This app presents this information in a more centralized,
                            accessible, mobile application. This occurs by presenting screening times and movie information in an
                            easy to view format for customers, and creating an interface for staff to schedule and manage
                            site information.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: '#FFF7EB',}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography className={classes.heading}>System Architecture</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The WUD Film App utilizes ASP.NET Core Model-View-Controller framework. The model and
                            controllers are hosted on a web server,
                            the system view will reside on client side devices. Communication between the controller and
                            views use HTTPS protocol. The MVC
                            architecture was chosen keep data accessible and interactive for users, provides a stable
                            architecture for the requested usability.
                            <br/><br/>
                            This application uses a MySQL database to utilize its capability to import spreadsheets. This
                            minimizes impact on the current workflows
                            for the Film Group. The application uses the MovieDB API to minimize database storage and user
                            input on creation forms.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: '#FFF7EB',}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Database Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <br/>
                        <img src={dbImage} alt={'DBImage'} className={classes.detailsImage}/>
                        <br/>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: '#FFF7EB',}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Final Product</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <br/>
                            <img src={desktopImage} className={classes.media}/>
                            <img src={mobileImage} className={classes.mobileImage}/>
                        <br/>
                    </AccordionDetails>
                </Accordion>
            </Card>
    );
}
