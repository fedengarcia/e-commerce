import React,{useContext} from 'react'
import CartItem from '../CartItem/CartItem';
import {Link} from 'react-router-dom';
import {Button,Grid,makeStyles} from '@material-ui/core';
import {CartListStyle} from './CartListStyle';
import {ModeContext} from '../../Context/CartContext';


const useStyle = makeStyles ((theme) => CartListStyle(theme));

export const ShowCartItems = ({items}) => {
    const classes = useStyle();
    const {getTotalPrice} = useContext(ModeContext);

    const ItemsGrid = ({item}) =>{
        return(
            <Grid item sx={12}>
                <CartItem item={item}></CartItem>
            </Grid>
            );
    }



    return <>
        {items.map((item) => <ItemsGrid item={item} key={item.item.id}/>)}

        <Grid item sx={12} style={{margin:'1em'}}>
            <h1 className={classes.titlesCart}>{`Total: $${getTotalPrice()}`}</h1>
        </Grid>

        <Grid item sx={12}>
            <Link to="/Form" className={classes.linkStyle}><Button
            variant="contained"
            size="large"
            className = {classes.buttonStyle}
            >
                Finalizar Compra
            </Button></Link>
        </Grid>

        <Grid item sx={12}>
            <Link to="/dialog/cleanCartDialog" className={classes.linkStyle}><Button
                variant="contained"
                size="large"
                className = {classes.buttonStyle}
            >
                Vaciar Carrito
            </Button></Link>
        </Grid>
    </>
}