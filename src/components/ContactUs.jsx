import {
         Button,
         Dialog,
         DialogActions,
         DialogContent,
         DialogContentText,
         DialogTitle,
         Grid,
         TextField,
         Typography
} from "@material-ui/core";
import React,{useState} from "react"

import Slide from '@material-ui/core/Slide';
import background from "../assets/background.jpg"
import buttonarrow from "../assets/send.svg"
import emailicon from "../assets/email.svg"
import {makeStyles} from "@material-ui/core/styles"
import phoneicon from "../assets/phone.svg"
import {useMediaQuery} from "@material-ui/core"
import { useTheme } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
     backgroundcontact: {
        background: `url(${background})` ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        
        
    },
     estimatebutton: {
        ...theme.typography.estimate,
       
    },
    subtext: {
        ...theme.typography.body1,
        fontWeight: 300,
        color: "#fff",
        fontSize: "1.4em",
        fontFamily:"Lato"
    },
        followbutton: {
        ...theme.typography.learnbutton,
            marginTop:20,
            marginRight:0,
          marginBottom: 0,
        [theme.breakpoints.up('lg')]:{
                    marginRight: 20

        },
        [theme.breakpoints.up('md')]:{
                    marginBottom: 10

        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: 10,
        borderRadius:10
    },
    dialog: {
        zIndex: theme.zIndex.modal+1,
        [theme.breakpoints.up('md')]:{
     paddingTop: '5em',
        paddingBottom: '5em',
        paddingLeft:"17em",
        paddingRight:"17em",
        }
    }
   
})

)
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ContactUs = () => {
    const classes=useStyles();
    const theme = useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [message, setMessage] = useState("")
    const [showDialog, setShowDialog] = useState(false)
    const handleDialog = ()=>setShowDialog(false)
    return (
        <Grid container direction="row" >
            <Grid item md={4} container direction="column" justify="center" alignItems="center" style={{width:'100%',marginTop:10,marginBottom:10}}>
                <Grid item >
                    <Grid container direction="column" >
                    <Grid item>
                        <Typography variant="h3">Contact Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color:theme.palette.common.blue,fontWeight:200}}>We are waiting.</Typography>
                    </Grid>
                        <Grid item style={{marginTop:10}}>
                            <Grid item container direction="row">
                                <Grid item style={{marginRight:10}}>
                                    <img src={phoneicon} alt="Phone number"/>
                                  </Grid>
                                <Grid item>
                                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontWeight:200}}>(999 999 999).</Typography>
                                    
                                      </Grid>
                            </Grid>
                            <Grid item container direction="row">
                                <Grid item style={{marginRight:10}}>
                                    <img src={emailicon} alt="Phone number" style={{verticalAlign:'bottom`'}}/>
                                  </Grid>
                                <Grid item>
                                    <Typography variant="body1" style={{color:theme.palette.common.blue,fontWeight:200}}>arkar20011@gmail.com</Typography>
                                    
                                      </Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <TextField label="Name" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Email" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Phone NUmber" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField
                                multiline
                                InputProps={{ disableUnderline: true }}
                                 rows={10} className={classes.message} value={message} id="message" onChange={(e) => setMessage(e.target.value)} />
                        </Grid>
                        <Grid item container justify="center">
                            <Grid item>
                                <Button variant="outlined"
                                     onClick={()=>setShowDialog(true)}
                                    className={classes.estimatebutton}>Send Message
                                    <img src={buttonarrow} alt="send"/>
                                </Button>
                            </Grid>
                        </Grid>

                        
                </Grid>
                  

                </Grid>
                </Grid>
            <Grid item md={8} className={classes.backgroundcontact} container alignItems="center">
                <Grid item container justify="center" direction={matchesSM?'column':'row'}>
                    <Grid item md>
                        <Grid container item justify="center" >
                            <Grid item >
                                 <Grid item container direction="column" >
                                    <Grid item>
                                        <Typography variant="h3" style={{textAlign:matchesMD?'center':'left'}}>Simple Software</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" style={{textAlign:matchesMD?'center':'left'}}>Revolutionary</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" style={{color:'white',fontWeight:200}} style={{textAlign:matchesMD?'center':'left'}}>Take advantage of </Typography>
                                        <Typography variant="body1" style={{color:'white',fontWeight:200}} style={{textAlign:matchesMD?'center':'left'}}>21st Century </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid item container justify={ matchesMD?'center':'flex-start'}>
                                            <Button className={classes.followbutton} >Follow</Button>
                                        </Grid>
                                    </Grid>
                                 </Grid>
                           </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md container justify="center">
                            <Button variant="outlined" className={classes.estimatebutton} onClick={()=>{setShowDialog(true)}}>Show Dialog
                        </Button>
                        <Dialog
                            fullScreen={matchesSM}
                            open={showDialog} TransitionComponent={Transition}
                            onClose={handleDialog}
                            aria-labelledby="form-dialog"
                            PaperProps={{className:classes.dialog}}
                        >
                            <DialogTitle id="form-dialog-title" >
                                     <Typography variant="h3">Contact Us</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Grid container direction="column" style={{minWidth:'20em'}}>
                                                 <Grid item >
                            <TextField fullWidth label="Name" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label="Email" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label="Phone NUmber" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                                        <TextField
                                           fullWidth
                                multiline
                                InputProps={{ disableUnderline: true }}
                                 rows={10} className={classes.message} value={message} id="message" onChange={(e) => setMessage(e.target.value)} />
                        </Grid>
                    <Grid item container justify="center" spacing={2}>
                            <Grid item>
                                <Button className={classes.followbutton}
                                            onClick={()=>setShowDialog(false)}
                                            >Cancel</Button>

                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.estimatebutton}>Send Message
                                    <img src={buttonarrow} alt="send"/>
                                </Button>
                            </Grid>
                           
                        </Grid>
                                </Grid>
                            </DialogContent>
                         </Dialog>
                    </Grid>
                </Grid>
           
            </Grid>
        </Grid>
    )
}

export default ContactUs;