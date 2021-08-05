import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Grid,makeStyles} from '@material-ui/core';
import {CartListStyle} from './CartListStyle';

const useStyle = makeStyles ((theme) => CartListStyle(theme));

export const ShowEmptyCart = () => {
    const classes = useStyle();


    return <>
    <Grid item sx={12}>
        <h1 className={classes.titleEmptyCart}>El carrito esta vacio</h1>
    </Grid>
    
    <Grid item sx={12}>
        <Link to="/" className={classes.linkStyle}><Button
            variant="contained"
            size="large"
            className = {classes.buttonStyle}
            >
                Ver Tienda
            </Button></Link>
    </Grid>
</>
}

