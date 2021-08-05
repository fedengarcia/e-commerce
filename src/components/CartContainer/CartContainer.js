import React,{useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CartContainerStyle} from './CartContainerStyle';
import {ModeContext} from '../../Context/CartContext';
import CartList from '../CartList/CartList';



const useStyle = makeStyles ((theme) => CartContainerStyle(theme));


export default function CartContainer  () {
    const {getItems} = useContext(ModeContext);
    
    const items = getItems();
    const classes = useStyle();

    
    return <div className={classes.gridContainer}>

        <CartList className={classes.cartListStyle} items={items} />

    </div>
}