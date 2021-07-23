import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
const arcBlue = "#0B7289"
const arcOrange = "#FFBA60"
const arcGrey="#868686"
export default  createMuiTheme({
    palette: {
        common: {
         blue: `${arcBlue}` ,orange:`${arcOrange}`
      },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    
  },
  typography: {
    container: {
      marginTop: "6em",
    
      paddingLeft:"4em",
      paddingRight:"4em"
    },
    h3: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2em",
      color: `${arcBlue}`,
      
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1.5em",
      color: `${arcBlue}`,
      marginBottom:'0.5em'
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "1em",
      color: `${arcGrey}`,
      // lineHeight:"3em",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: 20,
      color: "white",
    },
    body1: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "1em",
      color: `${arcGrey}`,
    },
    tab: {
      fontFamily: "Raleway",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem",
      minWidth: 10,
      color: "white",
      textDecoration: "none",
      
    },
    learnbutton: {
        width:"120px",
        textDecoration:'none',
        textTransform: 'none',
        border:`2px solid ${arcBlue}`,
        borderRadius: 50,
        fontFamily: "Roboto",
      color: `${arcBlue}`,
       
        height: "48px",
        "&:hover": {
            backgroundColor: `${arcOrange}`,
            color:'white'
        }
    },
    
    estimate: {
    fontFamily: "Pacifico",
    fontWeight: "700",
      textTransform: "none",
    borderRadius:50,
      height: "45px",
            marginTop:20,

      color: "white",
      backgroundColor: `${arcOrange}`,
      "&:hover": {
      backgroundColor: `${arcBlue}`,
      },
      
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1em',
        fontWeight:200
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
        borderBottom:`2px solid ${arcBlue}`
        },
        "&:hover:not($diabled):not($focused):not($error):before": {
        borderBottom:`2px solid ${arcBlue}`
          
        }
        
     }
    }
  }
});