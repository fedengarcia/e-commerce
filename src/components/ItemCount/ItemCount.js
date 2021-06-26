import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {ItemCountStyle} from './ItemCountStyle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Typography } from '@material-ui/core';


const useStyle = makeStyles((theme) => ItemCountStyle(theme));


export default function ItemCount ({stock, setAmount}) {
    const classes = useStyle();
    const [cantidad, setCantidad] = useState(0);


    const handleAddItem = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
            setAmount(cantidad + 1);
        }
    }
    
    const handleRemoveItem = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1);
            setAmount(cantidad - 1);
        }
    }

    return (
        <div className={classes.root}>
            <IconButton
                 onClick={handleRemoveItem}
            >

                <RemoveIcon style={{fontSize:"1.5em"}}/>
            </IconButton>

            <div className={classes.itemCountContainer}>
                <Typography style={{fontSize:"0.8em"}}>{`Cantidad: ${cantidad}`}</Typography>
            </div>

            <IconButton
                onClick={handleAddItem}
            >

                <AddIcon style={{fontSize:"1.5em"}}/>
            </IconButton>
        </div>
    );
}