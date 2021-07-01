import React, {useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core';
import {CartListStyle} from './CartListStyle';
import Grid from '@material-ui/core/Grid';
import CartItem from '../CartItem/CartItem';
import Button from '@material-ui/core/Button';
import {ModeContext} from '../../Context/CartContext';
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles ((theme) => CartListStyle(theme));

export default function CartList ({items}) {
    const classes = useStyle();
    const {clear,getTotalPrice} = useContext(ModeContext);
    const history = useHistory();

    const handleCleanCart = () => {
        clear();
    }

    const ItemsGrid = ({item}) =>{
        return(
            <Grid item sx={12}>
                <CartItem {...item}></CartItem>
            </Grid>
            );
    }


    const handleItems = (items) => {
        if (items.length > 0){
            return <>
                {items.map((item) => <ItemsGrid item={item} key={item.id}/>)}
                <div style={{margin:'1em'}}>
                    {`Total: $${getTotalPrice()}`}
                </div>
            </>
        }else{
            return <Grid item sx={12}>
                    <h1> Su carrito esta vacio</h1>
            </Grid>

        }

        
        
    }


    const handleCartButtons = (items) => { 
        if (items.length > 0){
            return <Grid item sx={12}
            justify="center"
            alignItems="center"
            direction="column"

        >
            <div className = {classes.actionContainer}>
                <Button
                variant="contained"
                size="large"
                className = {classes.buttonStyle}
                >
                    Finalizar Compra
                </Button>
                
                <Button
                variant="contained"
                size="large"
                className = {classes.buttonStyle}
                onClick = {handleCleanCart}
                >
                    Vaciar Carrito
                </Button>
            </div>
        </Grid>
        }else{
            return <Grid item sx={12}
                justify="center"
                alignItems="center"
                direction="column"
            >

            <div className = {classes.actionContainer}>
                <Button
                variant="contained"
                size="large"
                className = {classes.buttonStyle}
                onClick = {() => history.push('/')}
                >
                    Ver Tienda
                </Button>
            </div>

            </Grid>

        }
    }



    return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >

        {handleItems(items)}



        {handleCartButtons(items)}


        

            

        </Grid>
    )
}