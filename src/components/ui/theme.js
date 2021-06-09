import { createMuiTheme } from '@material-ui/core/styles';
const arcBlue = "#0B7289"
const arcOrange="#FFBA60"
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
    tab: {
      fontFamily: "Raleway",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem",
       minWidth: 10,
      
    },
    estimate: {
    fontFamily: "Pacifico",
    fontWeight: "700",
    textTransform: "none",
    height: "45px",
    color:"white"
    }
  }
});