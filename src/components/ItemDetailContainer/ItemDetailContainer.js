import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
import ItemDetail from '../ItemDetail/ItemDetail';
const dataJS = require('../../data');


const useStyle = makeStyles ((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyle();
    // const [item,setItem] = useState(React.Component);
    const [data,setData] = useState([]);

    useEffect(() => {
        const getItem = new Promise((resolve,reject) => {
            setTimeout(function(){
                resolve(dataJS.default); 
              }, 2000);
        })

        
        getItem.then((result) =>{
            setData(result);
            console.log(result[0])
        }).catch((err) => {
        console.log(err);
        })

    }, []);

   return(
        <div className={classes.itemDetailContainer}>
                <div className={classes.cardItemDetail}>
                    <ItemDetail {...data[0]}></ItemDetail>
                </div>  
        </div>
   )
}