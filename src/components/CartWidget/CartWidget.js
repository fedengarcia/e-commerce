import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const CartWidget = ({numProduct}) => {
  const history = useHistory();


    return (
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={() => history.push(`/cart`)}
            >
          <Badge badgeContent={numProduct} color="primary">
            <AddShoppingCartIcon style={{fontSize:"1.5em"}}/>
          </Badge>
          </IconButton>
    )
}


export default CartWidget;