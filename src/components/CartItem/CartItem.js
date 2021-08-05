import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import {CartItemStyle} from './CartItemStyle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {ModeContext} from '../../Context/CartContext';
import {useHistory} from 'react-router-dom';
import useImgRef from '../useImgRef/useImgRef';

const useStyle = makeStyles ((theme) => CartItemStyle(theme));

export default function CartItem ({item}) {
    const classes = useStyle();
    const {setItemTrashId} = useContext(ModeContext)
    const history = useHistory();
    const imgRef = useImgRef(item.item.urlImg);

    const handleTrashDialog = () => {
      setItemTrashId(item.item.id)
      history.push('/dialog/trashDialog');
    }

    return <div className={classes.cartItemContainer}>
        <div>
            <img src={imgRef} alt="Imagen pequena del producto"/>
        </div>
        
        <Typography className={classes.cartItem}>{`Zapatillas de ${item.item.categoria} ${item.item.marca}`}</Typography>

        <Typography className={classes.cartItem}>{`Cantidad: ${item.quantity}`}</Typography>

        <Typography className={classes.cartItem}>{`Precio: $${item.quantity * item.item.precio}`}</Typography>

        <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              className={classes.cartItem}
              onClick = {handleTrashDialog}
              
        >
            <DeleteIcon/>
        </IconButton>
    </div>
}