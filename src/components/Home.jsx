import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core"
import {Flip, LightSpeed, Slide} from 'react-reveal';

import HeroBlock from "./ui/HeroBlock"
import LandingPage from "./ui/LandingPage"
import Mobiledev from "./ui/Mobiledev"
import React from 'react'
import WebsiteDev from './ui/WebsiteDev';
import Zoom from "react-reveal"
import axios from 'axios'
import infoBackground from '../assets/infoBackground.svg'
import { makeStyles } from "@material-ui/styles"
import repeactingbackground from '../assets/repeatingBackground.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://127.0.0.1:8000/"

const useStyles = makeStyles(theme => ({
    text: {
            [theme.breakpoints.down('md')]: {
          fontSize: "1.3em",
    },
        [theme.breakpoints.down('sm')]: {
          fontSize: "1.1em",
    },
    
    },
    landingpagecontainer: {
        marginTop: '2em',
        [theme.breakpoints.down('md')]: {
            marginTop: '0em',
            fontSize:'1em'
        }
      
    },
    estimatebutton: {
        ...theme.typography.estimate,
       
    },
    followbutton: {
        ...theme.typography.learnbutton,
            marginTop:20,
            marginRight:20,
          marginBottom: 0,
        [theme.breakpoints.up('lg')]:{
                    marginRight: 20

        },
        [theme.breakpoints.up('md')]:{
                    marginBottom: 10

        }
    },
    buttoncontainer: {
        marginTop:20
    },
    lottieplayer: {
        minwidth: "200px",
        minheight:"200px"
    },
    infocontainer: {
          ...theme.typography.container
    },
    subtext: {
        
        ...theme.typography.subtitle1,
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3em",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.7em",
            
        }
    }, bgImg: {
        backgroundImage: `url(${repeactingbackground})`,
        width:"100vw",
        height: "100vh",
        background: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    },
    revolutioncardcontainer: {
        // position: "absolute",
        padding: "3em",
        borderRadius: 10,
        boxShadow: theme.shadows[4],
        [theme.breakpoints.down('sm')]: {
            boxShadow: 0,
            borderRadius: 0,
            padding: "1em",
             fontSize:"1em"
        }

    },
    revolutiontitle: {
          [theme.breakpoints.down('md')]: {
          fontSize: "1.3em",
    },
        [theme.breakpoints.down('sm')]: {
          fontSize: "1.1em",
    },
    },
    infobgImg: {
        backgroundImage: `url(${infoBackground})`,
        width:"100vw",
        height: "100vh",
        background: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    },
    servicecontainer: {
        ...theme.typography.container,
        color:'white',

    },
    abouttitle: {
        color:'white',

        [theme.breakpoints.down('md')]: {
          fontSize: "1.3em",
    },
        [theme.breakpoints.down('sm')]: {
          fontSize: "1.1em",
    },
    },
    aboutsubtext: {
        ...theme.typography.subtitle1,
        color:'white',
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3em",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.7em",
            
        }
    },
    aboutbutton: {
        ...theme.typography.learnbutton,
        color: "white",
        borderColor: "white",
         [theme.breakpoints.down('md')]: {
             padding: "0em",
             width: "80px",
             fontSize:'1em'
             
        },
        [theme.breakpoints.down('sm')]: {
            padding: "0em",
                         width: "50px",
             fontSize:'0.7em'

        }
    }
      
}))
const Home = () => {
     const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));
    const classes=useStyles();
    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container alignItems="center" justify={matches?'center':'flex-start'}  direction="row">
                    <Grid sm item className={classes.infocontainer}>
                        <LightSpeed left>
                            <Typography variant="h3" align={matches?'center':'left'} className={classes.text}>
                                    Culpa amet nostrud amet eu quis <br></br> enim et cillum laboris.
                                </Typography>
                        </LightSpeed>
                            <Grid container justify={matches?'center':'flex-start'} className={classes.buttoncontainer}>
                                    <Flip>
                                        <Grid item>
                                    <Button className={classes.followbutton} >Follow</Button>
                                    </Grid>
                                </Flip>
                            <Slide right>
                                <Grid item >
                                    <Button variant="outlined" className={classes.estimatebutton}>Free Estimate </Button>
                                </Grid>
                                </Slide>
                            </Grid>
                    </Grid>
                     <Grid  item style={{zIndex:10}} >
                        <LandingPage />
                    </Grid>
                </Grid>
       
            </Grid> 
            <Grid sm item>
                {/* <Grid container direction="column"></Grid> */}
                <HeroBlock />
                <Mobiledev />
                <WebsiteDev />
                <Grid item className={ classes.bgImg}>
                        
                    <Grid container justify="center" alignItems="center" style={{height:'100%'}} >
                        <Card className={classes.revolutioncardcontainer} >
                            <CardContent component={Zoom} top >
                                <Grid container direction="column"  style={{ textAlign: 'center' }}>
                                    <Grid item>
                                        <Typography variant='h3' className={classes.revolutiontitle} >
                                            Revolutionary block
                                        </Typography>
                                        <Typography className={classes.subtext}>
                                        Minim sunt deserunt laboris pariatur minim incididunt est consectetur ex culpa ullamco deserunt.
                                        </Typography>
                                        <Button className={classes.followbutton}>
                                                Learn More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            </Card>
                    
                </Grid>
                       
                </Grid>
                <Grid item className={ classes.infobgImg}>
                    <Grid container  justify="center" alignItems="center" direction={matchesSm?'column':'row'} style={{ height: '100%' }} className={classes.servicecontainer} >
                        <Grid item style={{ color: 'white', marginRight: matchesSm ? '0' : 'auto', marginBottom: matchesSm ? 20 :0 }}>
                            <Typography variant="h3" className={classes.abouttitle}  >
                                About Us 
                            </Typography>
                            <Typography  className={classes.aboutsubtext}  gutterBottom>
                               Let's Get Personal
                            </Typography>
                            <Button className={classes.aboutbutton}>Follow</Button>
                        </Grid>
                        <Grid item style={{color:'white',marginLeft:matchesSm?'0':'auto'}}>
                            <Typography variant="h3" className={classes.abouttitle} >
                                Contact Us 
                            </Typography>
                            <Typography className={classes.aboutsubtext} gutterBottom  >
                               Let's Get Contact
                            </Typography>
                            <Button  className={classes.aboutbutton}>Contact</Button>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        // </Grid>
    )

}

export default Home