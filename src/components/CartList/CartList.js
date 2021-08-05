import React from 'react';
import Grid from '@material-ui/core/Grid';
import {ShowEmptyCart} from './ShowEmptyCart'
import {ShowCartItems} from './ShowCartItems'



export default function CartList ({items}) {

    return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >

        {items.length > 0 ? <ShowCartItems items={items}/> : <ShowEmptyCart/>}


        </Grid>
    )
}