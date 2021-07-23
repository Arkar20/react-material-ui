import {Avatar, Grid, Typography} from '@material-ui/core'

import AnimationPlayer from "./ui/AnimationPlayer"
import Book from "../animations/documentsAnimation/data"
import React from 'react';
import { makeStyles } from "@material-ui/styles";
import profilepic  from "../assets/founder.jpg"
import puppy from "../assets/puppy.svg"
import techmac from "../assets/biometrics.svg"
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme=>(
    {
        container: {
              ...theme.typography.container,
         [theme.breakpoints.down('sm')]: {
            paddingLeft:'1.5em',
             paddingRight: '1.5em',
            marginTop:"2em"
        }
        },
        avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
    }))
const AboutUs = () => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.container}>
            <Grid item container direction="row">
                <Grid item>
                    <Typography variant="h3">About us</Typography>
                </Grid>
                <Grid item  direction="row" style={{marginTop:80}}>
                    <Typography variant="body1" align="center" style={{ color:theme.palette.common.blue,fontWeight:200}}>
                            Voluptate eu minim deserunt deserunt enim fugiat deserunt cillum reprehenderit et aliquip ea quis consectetur. Veniam laborum nostrud quis labore sunt labore commodo occaecat. Et aute non aute aliqua nostrud enim reprehenderit anim non labore voluptate dolor in. Voluptate mollit non reprehenderit minim consectetur nisi aute mollit consectetur. Occaecat adipisicing laboris nostrud amet consectetur nulla enim sunt ut irure dolor. Nulla magna consectetur et pariatur reprehenderit non irure sint voluptate. Laborum consequat duis adipisicing sint dolore ullamco pariatur duis.
                        </Typography>
                </Grid>
            </Grid>

            <Grid item container style={{marginTop:80}}>
                <Grid item>
                    <Typography variant="h3">History</Typography>
                    <Typography variant="body1" paragraph>We're the new kid on the block.</Typography>
                </Grid>
                <Grid item container >
                    <Grid item md>
                        <Typography variant="body1" style={{fontWeight:200}}paragraph>Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                        <Typography variant="body1" style={{fontWeight:200}}paragraph>It all started with one question: Why aren’t all businesses using available technology?
                                    There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.

                                    </Typography>
                        <Typography variant="body1" style={{fontWeight:200}}paragraph>
                        We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.

                        </Typography>
                                                <Typography variant="body1" style={{fontWeight:200}}paragraph>
                           All this change can be a lot to keep up with, and that’s where we come in. 
                        </Typography>
                    </Grid>
                    <Grid item md={4} >
                        <AnimationPlayer animationdata={Book}/>
                    </Grid>
                </Grid>
                
            </Grid>
            {/* end of histoury */}

            
            {/* start of team */}
            <Grid item container style={{ marginTop: 80 }} justify="center">
                <Grid item>
                    <Typography variant="h3" align="center">Team</Typography>
                    <Typography variant="body1" align="center" style={{ marginTop: 20, fontWeight:200}} paragraph>Zachary Reece, Founder
                        </Typography>
                    <Typography variant="body1" align="center" paragraph style={{fontWeight:200}}>I started coding when I was 9 years old.
                        </Typography>
                </Grid>
                <Grid item container direction="row"  justify="center">
                    <Avatar alt="Remy Sharp" src={profilepic} className={classes.avatar}/>
                </Grid>
                
            
            </Grid>
            <Grid item container direction="row" style={{marginTop:80}}>
                <Grid item xs={3}>
                    <img src={techmac} alt="techguru" style={{width:'80%'}}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" style={{fontWeight:200}} paragraph align="center">
                        I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                    </Typography>
                    <Typography variant="body1" style={{fontWeight:200}}  paragraph align="center">
                        Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <img src={puppy} alt="techguru" style={{width:'80%'}}/>
                </Grid>
                
            </Grid>
            {/* end of team */}


            
            
           
        </Grid>
    )
}
export default AboutUs