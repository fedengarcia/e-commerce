import React, {useContext,useState} from 'react';
import {ModeContext} from '../../Context/CartContext';
import { makeStyles } from '@material-ui/core';
import {CartItemStyle} from './CartItemStyle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles ((theme) => CartItemStyle(theme));

export default function CartItem (item) {
    const {removeItem} = useContext(ModeContext);

    const classes = useStyle();


    return <div className={classes.cartItemContainer}>
        <div style={{width: 'auto'}}>
            <img src={item.item.urlImg} alt="Imagen pequena del producto" style={{width: '4em'}}/>
        </div>
        
        <Typography className={classes.cartItem}>{`Zapatillas de ${item.item.categoria} ${item.item.marca}`}</Typography>


        <Typography className={classes.cartItem}>{`Cantidad: ${item.quantity}`}</Typography>

        <Typography className={classes.cartItem}>{`Precio: $${item.quantity * item.item.precio}`}</Typography>

        <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              className={classes.cartItem}
              onClick = {() => removeItem(item.item.id)}
              
        >
            <DeleteIcon/>
        </IconButton>
    </div>
}