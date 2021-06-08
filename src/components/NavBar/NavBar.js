import React, {useState} from 'react';
import {navBarStyle} from './NavBarStyle'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';


//IMPORT NEW NAVIGATION BAR


const useStyles = makeStyles((theme) => navBarStyle(theme));

const NavBar = () => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
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
      
      
      {/* AGREGAR CARRITO DE COMPRAS PARA  */}
      <MenuItem onClick={handleMenuClose}>Nike</MenuItem>
      <MenuItem onClick={handleMenuClose}>Jordan</MenuItem>
      <MenuItem onClick={handleMenuClose}>Addidas</MenuItem>
      


    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

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
            <MenuIcon />
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
              >


              <Typography className={classes.title}>Addidas</Typography>
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
         
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
            >
          <Badge badgeContent={17} color="secondary" >
            <AddShoppingCartIcon style={{fontSize:"1.5em"}}/>
          </Badge>
          </IconButton>

        

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