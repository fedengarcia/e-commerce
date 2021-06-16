import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
import dataJS from '../../data';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyles();
    const [data,setData] = useState(undefined);

    useEffect(() => {

        const loadData = new Promise((resolve, reject) => {
            setTimeout(function(){
              resolve(dataJS); 
            }, 2000);
          });
    
        loadData.then((result) => {
            setData(result)
        }).catch((err) =>{
            console.log(err);
        })

    }, []);
    
      

    return(
        <div className={classes.itemDetailContainer}>
            {/* SI DATA != undefined SUGAR SYNTAX*/}
           {data && <ItemDetail {...data[0]}/>}

        </div>
    );
}

