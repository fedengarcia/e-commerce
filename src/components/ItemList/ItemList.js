import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListStyle} from './ItemListStyle';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';



const useStyles = makeStyles((theme) => ItemListStyle(theme));


export default function ItemList ({data}) {
    const classes = useStyles();

    const ItemsGrid = ({data}) =>{
        return(
            <Grid item sx={12} md={4} sm={6}>
                <div className={classes.cardItem}>
                    <Item {...data}></Item>
                </div>    
            </Grid>
            );
    }


    return(

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
        
        {data.map((item) => <ItemsGrid data={item} key={item.id}/>)}
        

    
        </Grid> 
    
    );
}

