import React, {useState,useContext, useEffect} from 'react';
import {navBarStyle} from './NavBarStyle'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import CartWidget from '../CartWidget/CartWidget';
import {useHistory} from 'react-router-dom';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import Button from '@material-ui/core/Button';
// import ListIcon from '@material-ui/icons/List';
import navBarLogo from '../../img/logo.png'
import {ModeContext} from '../../Context/CartContext'

const useStyles = makeStyles((theme) => navBarStyle(theme));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const {getQuantity} = useContext(ModeContext);
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  // const handleQuantityItemsCart = () => {
  //   var items = getQuantity();
  //   for (var index = 0; index < items.length; index++) {
  //     var quantity = items[index]["quantity"] + quantity;
  //   }
  //   return quantity;
  // }


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
    // <PopupState variant="popover" popupId="demo-popup-menu"
    //   anchorEl={mobileMoreAnchorEl}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //   id={mobileMenuId}
    //   keepMounted
    //   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //   open={isMobileMenuOpen}
    //   onClose={handleMobileMenuClose}
    // >
    //   {(popupState) => (
    //     <>
    //     <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
    //         Open Menu
    //       </Button>
    //       <Menu {...bindMenu(popupState)}>
    //           <MenuItem onClick={() => handleMenuClose('Nike')}>Nike</MenuItem>
    //           <MenuItem onClick={() => handleMenuClose('Jordan')}>Jordan</MenuItem>
    //           <MenuItem onClick={() => handleMenuClose('Adiddas')}>Adiddas</MenuItem>
    //       </Menu>
    //     </>
    //   )}
    // </PopupState>

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
            <img src={navBarLogo} alt="logo" className={classes.imgNavBar}/>

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
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
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


// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';



// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

// export default function LabelBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
//       <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
//       <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
//     </BottomNavigation>
//   );
// }