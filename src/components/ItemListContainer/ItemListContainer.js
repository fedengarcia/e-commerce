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
        let itemsRender;
        if(marca !== undefined){
            itemsRender = (itemCollection.where("marca", "==", marca).limit(20));
        }else{
            itemsRender = itemCollection;
        }
      
      
        itemsRender.get().then((querySnapshot) => {
            
            if(querySnapshot !== 0){
                const myItems = querySnapshot.docs.map(doc => {
                    return {...doc.data(),id:doc.id}
                })
          
                setItems(myItems);
            }
            
      
        }).catch(err => {
            console.log("Ocurrio un error", err);
        })

    }, [marca]);
   

    return(
        <div className={classes.gridContainer}>
            <div className={classes.titleContainer}><h2 className={classes.title}>{marca}</h2></div>
            {items.length === 0 ? <h1 className={classes.tittleError}>Error al cargar la pagina, verifica tu conexion a Internet</h1> : loading}
            {loading === false ? <span>Cargando...</span> : <ItemList data={items}/>}
        </div>
    );
}

