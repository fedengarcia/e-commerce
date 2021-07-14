import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
import {useParams} from 'react-router-dom';
import {dataBase,loadItemDetailData} from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [item,setItem] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
        
        const itemCollection = dataBase.collection("items");
        loadItemDetailData(itemCollection.doc(id),setItem,setLoading);

    }, [id]);
    
      

    return(
        <div className={classes.itemDetailContainer}>
            {!loading && <span>Cargando...</span>}
            {loading && <ItemDetail {...item}/>}

        </div>
    );
}

