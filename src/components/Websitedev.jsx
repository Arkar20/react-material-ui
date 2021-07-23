import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import backArrow from "../assets/backArrow.svg"
import Analytic from "../assets/analytics.svg"
import ecommerce from "../assets/ecommerce.svg"
import outreach from "../assets/outreach.svg"
import seo from "../assets/seo.svg"
const useStyles = makeStyles(theme => ({
    webcontainer: {
        ...theme.typography.container,
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'5px',
            paddingRight: '5px',
            marginTop: "2em",
        }
    },
    webarrowbtn: {
        "&:hover": {
            backgroundColor: "inherit",
        }
    }
}))

const WebsiteDev = () => {
    const theme = useTheme();
    const mediaSm=useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item className={classes.webcontainer}>
                    <Grid container  direction="row">
                    <Grid xs={2} lg={1}
                    item>
                             <Button disableRipple  className={classes.webarrowbtn}>
                                <img src={backArrow} alt="backArrow" />
                          </Button>
                    </Grid>
                    <Grid lg={6} xs={8} item >
                        <Grid container direction="column" spacing={10}>
                            <Grid item>
                                <Typography variant="h4" >
                                    Website Development
                                </Typography>
                                <Typography>
                                    Officia officia sit ipsum incididunt reprehenderit aute elit do. Ullamco enim dolor elit ullamco. Duis non cillum aute ullamco nisi cillum ea labore anim. Tempor aliqua occaecat proident esse ea culpa et exercitation. Labore voluptate pariatur ipsum culpa dolore qui officia fugiat laboris sit. Labore magna amet aliqua minim ut deserunt aliqua eiusmod.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" >
                                        Analytic
                                </Typography>
                                <Grid container direction="row" alignItems="center" spacing={3} >
                                    
                                    <Grid lg={6} item>
                                        <img src={Analytic} alt="Analytic" style={{width:"100%"}} />
                                    </Grid>
                                    <Grid lg={6} item >
                                        <Typography>
                                            Officia officia sit ipsum incididunt reprehenderit aute elit do. Ullamco enim dolor elit ullamco. Duis non cillum aute ullamco nisi cillum ea labore anim. Tempor aliqua occaecat proident esse ea culpa et exercitation. Labore voluptate pariatur ipsum culpa dolore qui officia fugiat laboris sit. Labore magna amet aliqua minim ut deserunt aliqua eiusmod.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                       
                    </Grid>
                 </Grid>
            </Grid>
             <Grid item lg={12} className={classes.webcontainer}>
                <Grid container direction="row" justify="flex-end">
                    <Grid item container lg={6}>
                        <Grid item>
                             <Typography variant="h4" style={{marginLeft:100}}>
                                        E-commerce
                                </Typography>
                        </Grid>
                        <Grid item container direction="row" alignItems="center" justify="center" spacing={mediaSm?0:3}  >
                    <Grid lg={6} item>
                                        <img src={outreach} alt="Analytic" style={{width:"100%"}} />
                                    </Grid>
                            <Grid lg={6} item >
                                        <Typography>
                                            Officia officia sit ipsum incididunt reprehenderit aute elit do. Ullamco enim dolor elit ullamco. Duis non cillum aute ullamco nisi cillum ea labore anim. Tempor aliqua occaecat proident esse ea culpa et exercitation. Labore voluptate pariatur ipsum culpa dolore qui officia fugiat laboris sit. Labore magna amet aliqua minim ut deserunt aliqua eiusmod.
                                        </Typography>
                                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
             <Grid item lg={12} className={classes.webcontainer}>
                <Grid container direction="row" justify="flex-start">
                    <Grid item container lg={6}>
                        <Grid item>
                             <Typography variant="h4" style={{marginLeft:100}}>
                                        E-commerce
                                </Typography>
                        </Grid>
                        <Grid item container direction="row" alignItems="center" justify="center" spacing={mediaSm?0:3}  >
                    <Grid lg={6} item>
                                        <img src={seo} alt="Analytic" style={{width:"100%"}} />
                                    </Grid>
                            <Grid lg={6} item >
                                        <Typography>
                                            Officia officia sit ipsum incididunt reprehenderit aute elit do. Ullamco enim dolor elit ullamco. Duis non cillum aute ullamco nisi cillum ea labore anim. Tempor aliqua occaecat proident esse ea culpa et exercitation. Labore voluptate pariatur ipsum culpa dolore qui officia fugiat laboris sit. Labore magna amet aliqua minim ut deserunt aliqua eiusmod.
                                        </Typography>
                                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        
             <Grid item lg={12} className={classes.webcontainer}>
                <Grid container direction="row" justify="flex-end">
                    <Grid item container lg={6}>
                        <Grid item>
                             <Typography variant="h4" style={{marginLeft:100}}>
                                        E-commerce
                                </Typography>
                        </Grid>
                        <Grid item container direction="row" alignItems="center" justify="center" spacing={mediaSm?0:3}  >
                    <Grid lg={6} item>
                                        <img src={ecommerce} alt="Analytic" style={{width:"100%"}} />
                                    </Grid>
                            <Grid lg={6} item >
                                        <Typography>
                                            Officia officia sit ipsum incididunt reprehenderit aute elit do. Ullamco enim dolor elit ullamco. Duis non cillum aute ullamco nisi cillum ea labore anim. Tempor aliqua occaecat proident esse ea culpa et exercitation. Labore voluptate pariatur ipsum culpa dolore qui officia fugiat laboris sit. Labore magna amet aliqua minim ut deserunt aliqua eiusmod.
                                        </Typography>
                                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        
        </Grid>
    )
}

    
   
    


export default WebsiteDev