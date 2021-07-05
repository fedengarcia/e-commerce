import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyles();
    const [item,setItem] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
       
        //FIRE BASE CONECTION

    }, []);
    
      

    return(
        <div className={classes.itemDetailContainer}>
            {/* SI DATA != undefined SUGAR SYNTAX*/}
           {/* {data && <ItemDetail {...data[id]}/>} */}

        </div>
    );
}

