import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';
const dataJS = require('../../data');

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();
    const [data,setData] = useState([]);

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(function(){
              resolve(setData(dataJS.default)); 
            }, 2000);
          });
    
        loadData.then((result) => {
            console.log(result)
        }).catch((err) =>{
            console.log(err);
        })
        
    }, []); // [] >>>> Se ejecuta solo cuando se monta el componente


    
      

    return(
        <div className={classes.gridContainer}>
            <ItemList data={data}/>
        </div>
    );
}

