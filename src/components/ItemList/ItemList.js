import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListStyle} from './ItemListStyle';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';


const useStyles = makeStyles((theme) => ItemListStyle(theme));

export default function ItemList (data,flagId) {
  const classes = useStyles();
  

  return (
   data.map(item => 
      <Grid item sx={12} md={4} sm={6} key={item.id}> 
        <div className={classes.cardItem}>
            <Item {...item}></Item>
        </div>
      </Grid>
    )
  );

}

