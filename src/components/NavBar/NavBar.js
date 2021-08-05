import React, {useState,useContext} from 'react';
import {navBarStyle} from './NavBarStyle'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CartWidget from '../CartWidget/CartWidget';
import {useHistory} from 'react-router-dom';
import navBarLogo from '../../img/logo.png';
import menuIcon from '../../img/menuIcon.png';
import {ModeContext} from '../../Context/CartContext';

const useStyles = makeStyles((theme) => navBarStyle(theme));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const {getQuantity} = useContext(ModeContext);
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (e) => {
    handleMobileMenuClose();
    history.push(`/category/${e}`)
  };

  const handleMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';


  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      
      <MenuItem onClick={() => handleMenuClose('Nike')}>Nike</MenuItem>
      <MenuItem onClick={() => handleMenuClose('Jordan')}>Jordan</MenuItem>
      <MenuItem onClick={() => handleMenuClose('Adiddas')}>Adiddas</MenuItem>
      


    </Menu>
  );

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
          
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              className={classes.navBarIcon}
              onClick = {() => history.push('/category/Nike')}
              >


            <Typography className={classes.title}>Nike</Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              className={classes.navBarIcon}
              onClick = {() => history.push('/category/Jordan')}
              >


              <Typography className={classes.title}>Jordan</Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              className={classes.navBarIcon}
              onClick = {() => history.push('/category/Adiddas')}
              >


              <Typography className={classes.title}>Adiddas</Typography>
            </IconButton>
          </div>
          

          <div className={classes.grow} />
         
         
        <CartWidget numProduct={getQuantity()}/>
       
       
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );

}
export default NavBar;

