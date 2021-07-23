import React from 'react';
import {Grid,Typography} from '@material-ui/core'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { makeStyles } from '@material-ui/styles';
import HeroBlock from './ui/HeroBlock';
import Mobiledev from './ui/Mobiledev';
import WebsiteDev from './ui/WebsiteDev';
const useStyles = makeStyles(theme => ({
  servicecontainer: {
    ...theme.typography.container,
    [theme.breakpoints.down('sm')]: {
      marginTop: "1em",
      marginBottom: "1em",
      paddingLeft:"0.5em",
      paddingRight:"0.5em"
    }
  }
}))

const Service = () => {
const classes = useStyles();

    const options = { 
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        arrows: 'slider',
    
}
				
    return (
      <>
      {/* <Splide
            options={options}   
				hasAutoplayProgress>
              <SplideSlide>
                            <img src="https://images.unsplash.com/photo-1617892365170-92ff58599ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80" alt="Image 1" style={{width:"100vw",height:"50vh"}}/>
              </SplideSlide>
              <SplideSlide>
                <img src="https://images.unsplash.com/photo-1621872490971-2ef4d8c170ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80" alt="Image 2" style={{width:"100vw",height:"50vh"}}/>
              </SplideSlide>
      </Splide> */}
        <Grid container direction="column" >
          <Grid item className={classes.servicecontainer}>
              <Typography variant="h4">Services</Typography>
          </Grid>
          <Grid container direction="column" >
            <Grid item>
              <Grid container justify="flex-end">
                <Mobiledev />
              </Grid>
              <Grid container justify="flex-start">
                <HeroBlock />
              </Grid>
             
              <Grid container justify="flex-end">
                <WebsiteDev />
              </Grid>
             
            </Grid>
          </Grid>
           </Grid>
            </>
    )
}
export default Service;