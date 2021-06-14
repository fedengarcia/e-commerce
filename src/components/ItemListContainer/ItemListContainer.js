import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';


const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();
    var data = []

    const loadData = new Promise((resolve, reject) => {
        setTimeout(function(){
            var data1 = require('../../data');
          resolve(data1.default); 
        }, 250);
      });

    loadData.then((result) => {
        data = result;
    }).catch((err) =>{
        console.log(err);
    })
      

    return(
        <div className={classes.gridContainer}>
            <ItemList data={data}/>
        </div>
    );
}

