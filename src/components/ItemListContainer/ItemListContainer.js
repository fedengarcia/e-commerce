import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import {ItemListContainerStyle} from './ItemListContainerStyle';
import {useParams} from 'react-router-dom';
import {dataBase} from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer () {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [items,setItems] = useState([]);

    const {marca} = useParams();

    useEffect(() => {  
        
        setLoading(true);
        const itemCollection = dataBase.collection("items");
        var itemsRender;
        if(marca !== undefined){
            itemsRender = (itemCollection.where("marca", "==", marca).limit(20));
        }else{
            itemsRender = itemCollection;
        }
      
      
          itemsRender.get().then((querySnapshot) => {
            if(querySnapshot === 0){
                console.log("no results");
            }
      
            const myItems = querySnapshot.docs.map(doc => {
                return {...doc.data(),id:doc.id}
            })
      
            setItems(myItems);
      
        }).catch(err => {
            console.log("Ocurrio un error", err);
        })

    }, [marca]);
   

    return(
        <div className={classes.gridContainer}>
            {!loading && <span>Cargando...</span>}
            {loading && <ItemList data={items}/>}
        </div>
    );
}

