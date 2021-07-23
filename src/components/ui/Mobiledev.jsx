import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import mobile from "../../assets/mobileIcon.svg"
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
        marginTop: 10,
       
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
    mobileimg: {
        width: "10em",
        height:'10em'
    },
    imgcontainer: {
      
        
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20,
        },
        [theme.breakpoints.up('md')]: {
             marginRight: 20,

        },
    }
    
}))
const Mobiledev = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
         <Grid item>
<Grid container justify={ matches?'center':'flex-end'} direction="row" className={classes.serviceContainer}>
                 <Grid item className={classes.imgcontainer}>
                    <Zoom>
                        <img src={mobile} alt="mobile img" className={classes.mobileimg} />
                  </Zoom>
                    </Grid>  
                <Grid item style={{ textAlign: matches ? 'center' : "left" }} >
                        <Typography variant='h3' className={classes.maintext}>
                            mobile Development
                        </Typography>
                        <Typography  className={classes.subtext} > 
                    Laborum adipisicing tempor eiusmod exercitation aute non <br/> ad aute occaecat 
                    <span className={classes.specialText}>
                         officia id.
                    </span>
                        </Typography>
                <Button variant='outlined' className={classes.herobutton}>
                            Leran more
                        </Button>
                    </Grid>
                   
                </Grid>
            </Grid>
    )
}
export default Mobiledev