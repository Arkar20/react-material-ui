import React ,{useState,useEffect} from 'react'
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles'
import {Link} from "react-router-dom"

import logo from "../../assets/logo.svg"


const useStyles = makeStyles(theme=>({
  headerMargin: {
    ...theme.mixins.toolbar,
    marginTop:"3rem",
  },
  logo: {
    height: "6rem",
  },
  logocontainer: {
    padding: 0,
    "&:hover": {
      backgroundColor:"transparent"
    }
  },
  tabcontainer: {
    marginLeft:"auto",
  },
  tab: {
    ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
     
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "1rem",
    marginLeft: "2rem",
  
  }
}))


function HideOnScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const Header = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleMenuClose = () => {
    setOpenMenu(false)
    setAnchorEl(null)
  }


  const handlechange = (e,value) => {
    setValue(value)
  }
  useEffect(() => {
    
  },[])
  return (
      <>
    <HideOnScroll>
        <AppBar position="fixed"  >
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link} to="/home" className={styles.logocontainer}>
              <img alt="logo" className={styles.logo} src={logo} />
            </Button>
            <Tabs className={styles.tabcontainer}
              value={value} onChange={handlechange}
              aria-label="simple tabs example"
              indicatorColor="secondary"
            >
              <Tab  className={styles.tab} label="Home" component={Link} to="/home" />
              <Tab className={styles.tab}
                aria-controls="service-menu"
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={(e)=>handleMenu(e)}
                label="Services"
                component={Link}
                to="/service" />
              <Tab  className={styles.tab} label="The Revolution" component={Link} to="/revolution"  />
              <Tab className={styles.tab} label="About us"  component={Link} to="/about" />
              <Tab  className={styles.tab} label="Contact us"  component={Link} to="/contact" />
            </Tabs>
            <Button
              className={styles.button}
              variant="contained"
              color="secondary">Free Estimate</Button>
            <Menu
              id="service-menu"
              anchorEl={anchorEl}
              open={openMenu}
              MenuListProps={{onMouseLeave:handleMenuClose}}            
            >
                <MenuItem onClick={handleMenuClose}>Services Development</MenuItem>
                <MenuItem onClick={handleMenuClose}>Mobile Development</MenuItem>
                <MenuItem onClick={handleMenuClose}>Website Development</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
        <div className={styles.headerMargin} />
      </>
)
} 
export default Header