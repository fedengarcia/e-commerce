import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';
import {useParams} from 'react-router-dom';
import {dataBase, loadItemsListData} from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [items,setItems] = useState([]);
    const {marca} = useParams();

    useEffect(() => {  
        
        setLoading(true);
        const itemCollection = dataBase.collection("items");
        loadItemsListData(itemCollection,setItems,marca);

    }, [marca]);
   

    return(
        <div className={classes.gridContainer}>
            {!loading && <span>Cargando...</span>}
            {loading && <ItemList data={items}/>}
        </div>
    );
}

