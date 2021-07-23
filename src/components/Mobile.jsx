import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography,IconButton } from "@material-ui/core"
import backArrow from "../assets/backArrow.svg"
import bulb from "../assets/bulb.svg"
import animationdata from "../animations/documentsAnimation/data"
import scaleanimation from "../animations/scaleAnimation/data"
import automation from "../animations/automationAnimation/data"
import uxAnimation from "../animations/uxAnimation/data"
import root from "../assets/root.svg"
import AnimationPlayer from "./ui/AnimationPlayer"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mobilecontainer: {
        ...theme.typography.container,
         [theme.breakpoints.down('sm')]: {
            paddingLeft:'5px',
             paddingRight: '5px',
            marginTop:"2em"
        }
    },
    mobiletextblock: {
        maxWidth: "800px",
        [theme.breakpoints.down('sm')]: {
        maxWidth: "600px",
           
        }
    }
}))
const Mobile = () => {
    const theme = useTheme();
    const matchesm = useMediaQuery(theme.breakpoints.down('sm'));
    const classess = useStyles();
    const defaultOptions={
      loop: true,
      autoplay: true, 
      animationData: animationdata,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const scaleOptions={
      loop: true,
      autoplay: true, 
      animationData: scaleanimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
        <Grid container direction="column"  className={classess.mobilecontainer}>
            <Grid item container direction="row">
                <Grid item xs={1}>
                    <IconButton>
                        <img src={backArrow} alt="Back Arrow"/>
                    </IconButton>
                </Grid>
                <Grid item container direction="column" style={{ maxWidth: "40em" }} xs={11}>
                    <Grid item>
                        <Typography variant="h4">M0bile Development</Typography>
                        <Typography variant="body1" paragraph>
                            Lorem anim magna et ea magna deserunt mollit.
                        </Typography>
                        <Typography variant="body1" paragraph>
                           Enim labore voluptate commodo consequat ullamco esse ea tempor esse elit ad aliquip ut. Culpa dolor irure fugiat ipsum minim pariatur fugiat minim cupidatat commodo culpa consectetur. Nulla aliqua ut occaecat consequat dolore laborum laboris amet mollit id labore dolore amet deserunt. Deserunt non labore laborum eu nostrud ad. Proident consectetur id culpa esse elit velit amet incididunt amet aliqua nulla quis qui. Aute magna enim fugiat adipisicing id consectetur deserunt dolor officia minim sunt elit adipisicing qui.
                        </Typography>
                        <Typography variant="body1" paragraph>
                           Enim labore voluptate commodo consequat ullamco esse ea tempor esse elit ad aliquip ut. Culpa dolor irure fugiat ipsum minim pariatur fugiat minim cupidatat commodo culpa consectetur. Nulla aliqua ut occaecat consequat dolore laborum laboris amet mollit id labore dolore amet deserunt. Deserunt non labore laborum eu nostrud ad. Proident consectetur id culpa esse elit velit amet incididunt amet aliqua nulla quis qui. Aute magna enim fugiat adipisicing id consectetur deserunt dolor officia minim sunt elit adipisicing qui.
                        </Typography>
                   </Grid>
                  </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" style={{marginTop:200}}>
                <Grid item  container alignItems="center" direction="column" md style={{maxWidth:"20em",marginTop:40}}>
                    <Grid item >
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={bulb} alt="Save Energy" />
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" direction="column" md style={{maxWidth:"20em",marginTop:40}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={bulb} alt="Save Energy" />
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" direction="column" md style={{maxWidth:"20em",marginTop:40}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={bulb} alt="Save Energy" />
                    </Grid>
                </Grid>
              
            </Grid>
            <Grid item container direction="row" justify="space-between" style={{marginTop:200}}>
                <Grid item container direction={matchesm?'row':'column'} md justify="center">
                    <Grid item>
                         <Typography variant="h4">Digial Documents</Typography>
                    </Grid>
                    <Grid item container direction="row"  justify={matchesm?'center':'flex-start'}>
                        <Grid item md={4} style={{maxWidth:"20em"}}>
                              <Typography paragraph variant="body1" align={matchesm?'center':''}>
                                   Excepteur velit Lorem laborum Lorem et 
                              </Typography>
                              <Typography paragraph variant="body1" align={matchesm?'center':''}>
                                Consequat sint id nostrud velit elit duis amet eiusmod excepteur. Tempor cupidatat cupidatat ipsum nostrud enim do m

                              </Typography>
                        </Grid>
                        <Grid item md={5}>
                             <AnimationPlayer animationdata={animationdata }/>

                        </Grid>
                      
                    </Grid>
                   

                </Grid>
                <Grid item container direction={matchesm?'row':'column'} md >
                    <Grid item>
                         <Typography variant="h4" align="right">Scale</Typography>
                    </Grid>
                    <Grid item container direction="row"  justify={matchesm?'center':'flex-end'}>
                         <Grid item md={5}>
                             <AnimationPlayer animationdata={ scaleanimation}/>

                        </Grid>
                        <Grid item md={4} style={{ maxWidth: "20em" }}>
                              <Typography paragraph variant="body1" align={matchesm?'center':'right'}>
                                   Excepteur velit Lorem laborum Lorem et 
                              </Typography>
                              <Typography paragraph variant="body1" align={matchesm?'center':'right'}>
                                Consequat sint id nostrud velit elit duis amet eiusmod excepteur. Tempor cupidatat cupidatat ipsum nostrud enim do m

                              </Typography>
                        </Grid>
                       
                      
                    </Grid>
                   

                </Grid>
       

            </Grid>
            <Grid item  container direction="row"justify="center" style={{marginTop:200}}>
                <Grid item container direction="column" alignItems="center" md={12}>
                <Grid item>
                        <img src={root} alt="Root Cause" width="300" height="300" />
                    </Grid>
                    <Grid item  style={{ maxWidth: "20em" }}>
                        <Typography variant="h4" align="center">Root Cause Analysis</Typography>
                         <Typography variant="body1" paragraph align="center">
                            Reprehenderit fugiat labore qui consectetur.
                        </Typography>
                         <Typography variant="body1" paragraph align="center">
                       Culpa magna ut esse reprehenderit veniam nulla voluptate dolor est eu. Eiusmod consectetur mollit id esse minim cupidatat incididunt veniam in tempor ut aliqua. Veniam tempor ullamco aliqua ullamco dolore tempor proident eu amet Lorem nisi dolor consectetur consequat. Aliquip et eu ad non est amet magna ullamco. Nostrud voluptate do fugiat dolore aute eu consequat labore. Ipsum cillum do non dolor nulla consectetur proident deserunt. Ipsum sit in non laboris culpa occaecat nisi cillum ad.
                        </Typography>
                    </Grid>
              
                </Grid>

            </Grid>
           <Grid item container direction="row" justify="space-between" style={{marginTop:200}}>
                <Grid item container direction={matchesm?'row':'column'} md justify="center">
                    <Grid item>
                         <Typography variant="h4">Automation</Typography>
                    </Grid>
                    <Grid item container direction="row"  justify={matchesm?'center':'flex-start'}>
                        <Grid item md={4} style={{maxWidth:"20em"}}>
                              <Typography paragraph variant="body1" align={matchesm?'center':''}>
                                   Excepteur velit Lorem laborum Lorem et 
                              </Typography>
                              <Typography paragraph variant="body1" align={matchesm?'center':''}>
                                Consequat sint id nostrud velit elit duis amet eiusmod excepteur. Tempor cupidatat cupidatat ipsum nostrud enim do m

                              </Typography>
                        </Grid>
                        <Grid item md={5}>
                             <AnimationPlayer animationdata={automation }/>

                        </Grid>
                      
                    </Grid>
                   

                </Grid>
                <Grid item container direction={matchesm?'row':'column'} md >
                    <Grid item>
                         <Typography variant="h4" align={matchesm?'center':'right'} paragraph>User Experence And Design</Typography>
                    </Grid>
                    <Grid item container direction="row"  justify={matchesm?'center':'flex-end'}>
                         <Grid item md={2}>
                             <AnimationPlayer animationdata={ uxAnimation}/>

                        </Grid>
                        <Grid item md={8} style={{ maxWidth: "20em" }}>
                              <Typography paragraph variant="body1" align={matchesm?'center':'right'}>
                                   Excepteur velit Lorem laborum Lorem et 
                              </Typography>
                              <Typography paragraph variant="body1" align={matchesm?'center':'right'}>
                                Consequat sint id nostrud velit elit duis amet eiusmod excepteur. Tempor cupidatat cupidatat ipsum nostrud enim do m

                              </Typography>
                        </Grid>
                       
                      
                    </Grid>
                   

                </Grid>
       

            </Grid>
        </Grid>
    )
}
export default Mobile