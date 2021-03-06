import React, {useState,useContext} from 'react';
import {navBarStyle} from './NavBarStyle'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CartWidget from '../CartWidget/CartWidget';
import {useHistory, NavLink} from 'react-router-dom';
import navBarLogo from '../../img/logo.png';
import menuIcon from '../../img/menuIcon.png';
import {ModeContext} from '../../Context/CartContext';
import MobileNavBar from './MobileNavBar';

const useStyles = makeStyles((theme) => navBarStyle(theme));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const {getQuantity} = useContext(ModeContext);
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';


  const mobileMenuId = 'primary-search-account-menu-mobile';
  


  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar className={classes.toolBar}>
        
        <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              className={classes.logo}
              onClick = {() => history.push('/')}
              
              >


            <img src={navBarLogo} alt="logo" className={classes.imgNavBar}/>
            </IconButton>
        {/* MOBILE SECTION */}
        <div className={classes.sectionMobile}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls={mobileMenuId}
            onClick={handleMenuOpen}
          >
            <img src={menuIcon} alt="logo" className={classes.menuIcon}/>

          </IconButton>
        </div>
          {/* DESKTOP SECTION */}
          <div className={classes.sectionDesktop}>
            <NavLink to="/category/Nike" className={classes.linkStyle}><Typography className={classes.title}>Nike</Typography></NavLink>
            <NavLink to="/category/Jordan" className={classes.linkStyle}><Typography className={classes.title}>Jordan</Typography></NavLink>
            <NavLink to="/category/Adiddas" className={classes.linkStyle}><Typography className={classes.title}>Adiddas</Typography></NavLink>
          </div>
          

          <div className={classes.grow} />
         
         
        <CartWidget numProduct={getQuantity()}/>
       
       
        </Toolbar>
      </AppBar>
      {MobileNavBar ({ setMobileMoreAnchorEl, mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen })}
    </div>
  );

}
export default NavBar;

