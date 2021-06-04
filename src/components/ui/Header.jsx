import { AppBar,Toolbar,Slide,useScrollTrigger } from "@material-ui/core";
import PropTypes from 'prop-types';
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

const Header = () => (
    <HideOnScroll>
        <AppBar>
            <Toolbar>Here comes Logo</Toolbar>
            </AppBar>
    </HideOnScroll>
)
export default Header