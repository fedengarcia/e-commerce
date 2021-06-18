import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';
import dataJS from '../../data';
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();
    const [data,setData] = useState(undefined);
    const {marca} = useParams();

    useEffect(() => {
        const loadData = new Promise((resolve, reject) => {
            setTimeout(function(){
              resolve(dataJS); 
            }, 2000);
          });
    
        loadData.then((result) => {
            setData(result);
        }).catch((err) =>{
            console.log(err);
        })
    }, []);
   

    return(
        <div className={classes.gridContainer}>
            {data && <ItemList data={data} marca={marca}/>}
        </div>
    );
}

