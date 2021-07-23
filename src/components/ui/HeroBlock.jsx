import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Customsoftwareimg from "../../assets/Custom Software Icon.svg"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Zoom from "react-reveal"

const useStyles = makeStyles(theme => ({
    specialText: {
        ...theme.typography.subtitle1,
        fontFamily: "Pacifico",
        fontSize: '1.1em',
        color:theme.palette.common.orange,
    },
    herobutton: {
              ...theme.typography.learnbutton
    },
    serviceContainer: {
        ...theme.typography.container,
       
    },
    maintext: {
         [theme.breakpoints.down('md')]: {
          fontSize: "1.3em",
    },
        [theme.breakpoints.down('sm')]: {
          fontSize: "1.1em",
    },
    },
    subtext: {
        
        ...theme.typography.subtitle1,
         [theme.breakpoints.down('md')]: {
          fontSize: "1.3em",
    },
        [theme.breakpoints.down('sm')]: {
             fontSize: "0.7em",
            
    },
    },
    imgcontainer: {
        marginLeft: 20,

        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
            marginLeft: 0,
        }
    }
    
}))

const HeroBlock = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
       
            <Grid item>
            <Grid container justify={ matches?'center':'flex-start'} direction="row" className={classes.serviceContainer}>
                    <Grid item style={{textAlign: matches?'center': "left"}} >
                        <Typography variant='h3' className={classes.maintext}>
                            Hero BLock
                        </Typography>
                        <Typography  className={classes.subtext} > 
                    Laborum adipisicing tempor eiusmod exercitation aute <br/>  non ad aute occaecat 
                    <span className={classes.specialText}>
                         officia id.
                    </span>
                        </Typography>
                <Button variant='outlined' className={classes.herobutton}>
                            Leran more
                        </Button>
                    </Grid>
                <Grid item className={classes.imgcontainer}>
                    <Zoom>
                        <img src={Customsoftwareimg} alt="servces" />
                    </Zoom>
                    </Grid>
                </Grid>
            </Grid>
           
      
        
          
    )
}
export default HeroBlock