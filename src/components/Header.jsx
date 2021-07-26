import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Slide,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger
} from "@material-ui/core";
/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect, useState} from 'react'

import {Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import PropTypes from 'prop-types';
import logo from "../assets/logo.svg"
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  appbar: {
    zIndex: theme.zIndex.modal
  },
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
    "&:hover": {
        opacity:1
      }
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
      marginTop:0,
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
     color:"white",
      
    }
  },
  selectedmenuitem: {
    ...theme.typography.tab,
     color:"white",
    opacity: 1,
   
  },
  drawercontainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto"
  },
  drawericon: {
    height: "30px",
    width:"30px"
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  draweritemtext: {
    ...theme.typography.tab,
    color:"white"
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    
  },
  listitem: {
    opacity: 0.7,
    "&:hover": {
      opacity:1
    }
  },
  selectedlistitem: {
    opacity: 1,
    borderLeft:`2px solid ${theme.palette.common.orange}`
    
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



const Header = ({value,setValue,selectedIndex,setSelectedIndex,handlechange}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [openMenu, setOpenMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const matches=useMediaQuery(theme.breakpoints.down('md'))
  const [openDrawer, setOpenDrawer] = useState(false)
  const menusoption = [
    { name: "Services", path: "/service" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Website Development", path: "/website-development" },
  ];

  const taboptions = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/service", ariacontrol: "service-menu", ariapopup: anchorEl ? true : undefined, mouseover: (e) => handleMenu(e) },
    { name: "Revolution", path: "/revolution" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];


  useEffect(() => {
    taboptions.forEach((route,index) => {
      switch (window.location.pathname) {
        case (`${route.path}`):
          setValue(index)
          break;
        default:
            return;
      }
    })
    menusoption.forEach((route,index) => {
      switch (window.location.pathname) {
        case (`${route.path}`):
          setValue(1)
          setSelectedIndex(index)
          break;
        default:
            return;
      }
    })

  },[value,selectedIndex,menusoption,taboptions])
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
  
  const tabs = (
    <>
       <Tabs className={styles.tabcontainer}
              value={value} onChange={handlechange}
              aria-label="menu-tabs"
              indicatorColor="secondary"
      >
        {
          taboptions.map((link,index) => (
            <Tab className={styles.tab}
                key={index}
                aria-controls={link.ariacontrol}
                aria-haspopup={link.ariapopup}
                onMouseOver={link.mouseover}
                label={link.name}
                component={Link}
                to={link.path} />
          ))
              
        }
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
              keepMounted
              style={{zIndex:1303}}

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
                      classes={{ root: styles.menuitem}}
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
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  const drawer = (
    <>
      <IconButton onClick={toggleDrawer} disableRipple className={styles.drawercontainer}>
        <MenuIcon  className={styles.drawericon} />
      </IconButton>

      
      
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{paper:styles.drawer}}
      >
        <div className={styles.headerMargin} />

        <List disablePadding >
          {
            taboptions.map((link,index) => (
              <ListItem
                  key={index}
                  className={styles.listitem}
                  classes={{selected:styles.selectedlistitem}}
                  onClick={() => { setOpenDrawer(false);setValue(index)}}
                  divider
                  selected={value===index}
                  component={Link}
                  button
                  to={link.path}>
                <ListItemText disableTypography className={styles.draweritemtext} >{ link.name}</ListItemText>
              </ListItem>
            ))
          }
        
          <ListItem
            onClick={()=>setOpenDrawer(false)}
            divider
            button
            component={Link}
            className={styles.drawerItemEstimate} 
            to="/home">
            <ListItemText disableTypography >EstimateAnimation</ListItemText>
          </ListItem>
         </List>
      </SwipeableDrawer>
      </>
  )
  return (
      <>
    <HideOnScroll>
        <AppBar position="fixed" className={styles.appbar} >
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link} to="/home" className={styles.logocontainer}>
              <img alt="logo" className={styles.logo} src={logo} />
            </Button>
            {
              matches?drawer:tabs
            }
            
        </Toolbar>
      </AppBar>
    </HideOnScroll>
        <div className={styles.headerMargin} />
      </>
)
} 
export default Header