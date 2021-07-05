import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from '../ItemDetail/ItemDetail';
import {ItemDetailContainerStyle} from './ItemDetailContainerStyle';
import {useParams} from 'react-router-dom';
import {dataBase} from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [item,setItem] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
        
        console.log("ID DEL ITEM A MOSTRAR ES...............", id);
        const itemCollection = dataBase.collection("items");
        const idItem = itemCollection.doc(id);

        //FIRE BASE CONECTION

        idItem.get().then((querySnapshot) => {
            setItem({id: querySnapshot.id,...querySnapshot.data()});
            setLoading(true);
        }).catch(err => {
            console.log("Ocurrio un error", err);
        })
    }, [id]);
    
      

    return(
        <div className={classes.itemDetailContainer}>
            {!loading && <span>Cargando...</span>}
            {loading && <ItemDetail {...item}/>}

        </div>
    );
}

