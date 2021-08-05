import React from 'react';
import {navBarStyle} from './NavBarStyle'
import {makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => navBarStyle(theme));


const MobileNavBar = ({setMobileMoreAnchorEl,mobileMoreAnchorEl,mobileMenuId,isMobileMenuOpen}) => {
    const classes = useStyles();

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };

    return ( <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        
      
        <MenuItem><NavLink to="/category/Nike" className={classes.linkStyle}>Nike</NavLink></MenuItem>
        <MenuItem><NavLink to="/category/Jordan" className={classes.linkStyle}>Jordan</NavLink></MenuItem>
        <MenuItem><NavLink to="/category/Adiddas" className={classes.linkStyle}>Adiddas</NavLink></MenuItem>
  
  
      </Menu>)
}

export default MobileNavBar;