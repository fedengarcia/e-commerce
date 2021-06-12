import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';


const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer ({data}) {
    const classes = useStyles();

    return(
        <div className={classes.gridContainer}>
            <ItemList data={data}/>
        </div>
    );
}

