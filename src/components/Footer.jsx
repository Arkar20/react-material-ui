import { makeStyles } from '@material-ui/styles'
import footeradorement from "../assets/Footer adorement.svg"
import { Grid, Hidden } from "@material-ui/core";
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme)=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        padding: 0,
        margin: 0,
       width:"100%"
      
        
    },
    img: {
        width: "16rem",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]:{
            width:"8rem"
        },
        [theme.breakpoints.down('xs')]:{
            width:"5rem"
        },
    },
    maincontainer: {
        position: 'absolute',
        width:"100vw"
    },
    gridtext: {
        ...theme.typography.tab,
          opacity: 0.7,
    },
    gridactivetext: {
              opacity:1
    },
    griditem: {
        marginTop: "2em",
        zIndex:99
    },
    socialcontainer: {
        position: "absolute",
        marginTop: "-4.5em",
        width: "100%",
        [theme.breakpoints.down('md')]: {
             marginTop: "-3.5em",
        },
        [theme.breakpoints.down('sm')]: {
             marginTop: "-2.5em",
        }
       
    },
    socialitem: {
        color: "white",
       
    },
    socialicon: {
        width: "2.5rem",
        height: "2.5rem",
        [theme.breakpoints.down('md')]: {
            width: "2rem",
             height: "2rem",
        },
        [theme.breakpoints.down('sm')]: {
            width: "1rem",
             height: "1rem",
        }
    }
    
}))

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex,handlechange }) => {
    console.log(value)
    const classes = useStyles();
    return (
      
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.maincontainer} spacing={10}>
                <Grid item  className={classes.griditem}>
                    <Grid container>
                            <Grid item
                                onClick={() => setValue(0)}
                                component={Link}
                                to="/home"
                                className={classes.gridtext}
                              
                            >
                            Home
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item className={classes.griditem}>
                    <Grid container direction="column" spacing={3}>
                            <Grid item onClick={() => { setValue(1);setSelectedIndex(0)}}
                                component={Link}
                                to="/service" className={classes.gridtext}> Services</Grid>
                            <Grid item
                                onClick={() => { setValue(1);setSelectedIndex(1)}}
                                component={Link}
                                to="/mobile-development"
                                className={classes.gridtext}>Mobile Development </Grid>
                           
                            <Grid item
                                component={Link}
                                to="/website-development"
                                onClick={() => { setValue(1);setSelectedIndex(2)}}
                                
                                className={classes.gridtext}>Website Development </Grid>
                           
                   </Grid>
                </Grid>
                <Grid item className={classes.griditem}>
                    <Grid container>
                            <Grid item
                                onClick={() => { setValue(2)}}
                                component={Link}
                                to="/revolution"
                                className={classes.gridtext}>
                            Revolution
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item>
                    <Grid container className={classes.griditem}>
                            <Grid item
                              onClick={() => { setValue(4)}}
                                component={Link}
                                to="/contact"
                                className={classes.gridtext}>
                            Contact Us
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item className={classes.griditem}>
                    <Grid container>
                            <Grid item
                                onClick={() => { setValue(3)}}
                                component={Link}
                                to="/about"
                                className={classes.gridtext}>
                            About Us
                        </Grid>
                   </Grid>
                </Grid>
                <Grid item className={classes.griditem}>
                    <Grid container>
                            <Grid item
                                onClick={() => { setValue(2)}}
                                component={Link}
                                to="/estimate"
                                className={classes.gridtext}>
                            Free Estimate
                        </Grid>
                   </Grid>
                </Grid>
                </Grid>
                </Hidden>
            <img alt="footer-img"
                src={footeradorement}
                className={classes.img}
            />
            <div>
                <Grid container justify="flex-end" className={classes.socialcontainer} spacing={3}>
                    <Grid item className={classes.socialitem} >
                        <img src={facebook} className={classes.socialicon} alt="Footer"/>
                    </Grid>
                    <Grid item>
                        <img src={instagram} className={classes.socialicon} alt="Footer"/>
                    </Grid>
                    <Grid item>
                        <img src={twitter} className={classes.socialicon} alt="Footer"/>
                    </Grid>
                </Grid>
            </div>
            
          
            
            </footer>
   
    )
}
export default Footer;