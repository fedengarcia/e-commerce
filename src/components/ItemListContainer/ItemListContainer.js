import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListContainerStyle} from './ItemListContainerStyle';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import ItemList from '../ItemList/ItemList';

const product = {
    model:"Nike Hypedunk 2020",
    price: 20,
    type:"Zapatillas de Basquet",
    urlImage: "../../img/d-rose-11-shoes.jpg",
}


const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();

    return(
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item sx={12} md={4} sm={6} > 
                    <div className={classes.cardItem}>
                        <ItemList {...product}></ItemList>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.cardItem}>
                        <IconButton className={classes.iconAdd}>
                            <AddCircleOutlineIcon style={{fontSize:"1.5em"}}/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid> 
    );
}

