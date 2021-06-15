import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
const dataJS = require('../../data');

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyles();
    const [data,setData] = useState([]);

    useEffect(() => {

        const loadData = new Promise((resolve, reject) => {
            setTimeout(function(){
              resolve(dataJS.default); 
            }, 2000);
          });
    
        loadData.then((result) => {
            setData(result)
            console.log(result[0]);
        }).catch((err) =>{
            console.log(err);
        })

    }, []);
    
      

    return(
        <div className={classes.itemDetailContainer}>
            <ItemDetail {...data[0]}/>
        </div>
    );
}

