import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {navBarStyle} from './NavBarStyle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => navBarStyle(theme));

const NavBar = () => {
  const classes = useStyles();

  return (
      <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.bar} variant="dense">
          <nav className={classes.navContainer}>
              <ul className={classes.listClass}>
                <li><Button color="inherit">Urbanas</Button></li>
                <li><Button color="inherit">Training</Button></li>
                <li><Button color="inherit">Basquet</Button></li>
                <li><Button color="inherit">Tenis</Button></li>
              </ul>
          </nav>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;