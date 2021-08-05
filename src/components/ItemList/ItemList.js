import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListStyle} from './ItemListStyle';
import Grid from '@material-ui/core/Grid';
import Item from '../Items/Item';



const useStyles = makeStyles((theme) => ItemListStyle(theme));


export default function ItemList ({data}) {
    const classes = useStyles();

    return(

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
        
        {data.map((item) =>  <Grid item sx={12} md={4} sm={6}>
                <div className={classes.cardItem}>
                    <Item {...item} key={item.id}></Item>
                </div>    
            </Grid>)}

    
        </Grid> 
    
    );
}

