import React, {useContext} from 'react';
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
    const {getTotalPrice} = useContext(ModeContext);
    const history = useHistory();


    const ItemsGrid = ({item}) =>{
        return(
            <Grid item sx={12}>
                <CartItem item={item}></CartItem>
            </Grid>
            );
    }


    const handleItems = (items) => {
        if (items.length > 0){
            return <>
                {items.map((item) => <ItemsGrid item={item} key={item.item.id}/>)}
                <Grid item sx={12} style={{margin:'1em'}}>
                     {`Total: $${getTotalPrice()}`}
                </Grid>

                <Grid item sx={12}>
                    <Button
                    variant="contained"
                    size="large"
                    className = {classes.buttonStyle}
                    onClick={() => history.push('/dialog/formDialog')}
                    >
                        Finalizar Compra
                    </Button>
                </Grid>

                <Grid item sx={12}>
                    <Button
                        variant="contained"
                        size="large"
                        className = {classes.buttonStyle}
                        onClick = {() => history.push('/dialog/cleanCartDialog')}
                    >
                        Vaciar Carrito
                    </Button>
                </Grid>
            </>
        }else{
            return <>
                <Grid item sx={12}>
                    <h1> Su carrito esta vacio</h1>
                </Grid>
                
                <Grid item sx={12}>
                    <Button
                        variant="contained"
                        size="large"
                        className = {classes.buttonStyle}
                        onClick = {() => history.push('/')}
                        >
                            Ver Tienda
                        </Button>
                </Grid>
            </>
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


        </Grid>
    )
}