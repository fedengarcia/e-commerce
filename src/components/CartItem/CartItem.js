import React, {useEffect,useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import {CartItemStyle} from './CartItemStyle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { getStorageRef } from '../../Firebase/firebase';
import {ModeContext} from '../../Context/CartContext';
import {useHistory} from 'react-router-dom';


const useStyle = makeStyles ((theme) => CartItemStyle(theme));

export default function CartItem ({item}) {
    const [imgRef,setImgRef] = useState(null);
    const classes = useStyle();
    const {setItemTrashId} = useContext(ModeContext)
    const history = useHistory();

    useEffect(() => {
        if(item.item.urlImg){
          const storageRef = getStorageRef();
          const finalRef = storageRef.child(item.item.urlImg);
        
          finalRef.getDownloadURL().then((URL) => {
            setImgRef(URL);
          }).catch(err => {
            console.log(err);
          });
    
        }
    
      }, [item]);


    const handleTrashDialog = () => {
      setItemTrashId(item.item.id)
      history.push('/dialog/trashDialog');
    }

    return <div className={classes.cartItemContainer}>
        <div style={{width: 'auto'}}>
            <img src={imgRef} alt="Imagen pequena del producto" style={{width: '4em'}}/>
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