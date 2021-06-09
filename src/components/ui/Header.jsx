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
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme} from "@material-ui/styles"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles'
import {Link} from "react-router-dom"

import logo from "../../assets/logo.svg"


const useStyles = makeStyles(theme=>({
  headerMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
       marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
       marginBottom: "0em",
    }
  },
  logo: {
      height: "8em",
    [theme.breakpoints.down("md")]: {
      height:"7em"
    },
    [theme.breakpoints.down("xs")]: {
      height:"4em"
    }
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
  
  },
  menu: {

    backgroundColor: theme.palette.common.blue,
    color:"white",
  },
  menuitem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
    opacity: 1,
    }
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

const menusoption = [
  { name: "Services", path: "/service" },
  { name: "Mobile Development", path: "/mobile-development" },
  { name: "Website Development", path: "/website-development" },
]


const Header = () => {
  const theme = useTheme();
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const matches=useMediaQuery(theme.breakpoints.down('md'))
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleMenuClose = () => {
        setOpenMenu(false)

  }
  const menuclick = (i) => {
       setSelectedIndex(i)
      setOpenMenu(false)
      setAnchorEl(null)
  }



  const handlechange = (e,value) => {
    setValue(value)
  }
  const tabs = (
    <>
       <Tabs className={styles.tabcontainer}
              value={value} onChange={handlechange}
              aria-label="menu-tabs"
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
              classes={{paper:styles.menu}}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              elevation={0}
            >
              {
                menusoption.map((menu, index) => {
                  return [
                    <MenuItem
                      key={index}
                      onClick={() => {
                        menuclick(index);
                        setValue(1)
                      }}
                      classes={{ root: styles.menuitem }}
                      component={Link}
                      to={menu.path}
                      selected={selectedIndex === index}
                    >
                      {menu.name}
                    </MenuItem>
                ]
              })
              }
               
            </Menu>
      </>
  )
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
            {
              matches?null:tabs
            }
        </Toolbar>
      </AppBar>
    </HideOnScroll>
        <div className={styles.headerMargin} />
      </>
)
} 
export default Header