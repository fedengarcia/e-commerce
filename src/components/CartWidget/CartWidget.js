import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import { cartWidgetStyle } from './CartWidgetStyle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';



// const useStyles = makeStyles ((theme) => cartWidgetStyle(theme));

const CartWidget = ({numProduct}) => {
    return (
        <>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
          <Badge badgeContent={numProduct} color="secondary" >
            <AddShoppingCartIcon style={{fontSize:"1.5em"}}/>
          </Badge>
          </IconButton>
        </>
    )
}


export default CartWidget;