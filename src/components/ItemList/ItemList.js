import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListStyle} from './ItemListStyle';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ItemListStyle(theme));


export default function ItemList ({data}) {
    const classes = useStyles();
    const [flagId, setFlagId] = useState(6);

    const handleAddButton = () => {
        setFlagId(flagId + 6);
    }


    // var loadItem = new Promise((resolve, reject) => {
    //     setTimeout(function(){
           
    //       resolve("Salio todo bien"); // ¡Todo salió bien!
    //     }, 250);
    //   });
      
      
    const ItemsGrid = ({data}) =>{
        return(
            <Grid item sx={12} md={4} sm={6}>
                <div className={classes.cardItem}>
                    <Item {...data}></Item>
                </div>    
            </Grid>
            );
    }

    return(

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            
        {data.filter((item) => item.id <= flagId).map((item) => <ItemsGrid data={item} key={item.id}/>)}
            {/* {
                loadItem.then((result) => {
                    console.log(result);
                }).catch((err) =>{
                    console.log(err);
                })
            } */}


            <Grid item xs={12}>
                <div className={classes.cardItem}>
                    <IconButton
                        onClick = {handleAddButton}
                    >
                        <AddCircleOutlineIcon style={{fontSize:"1.5em"}}/>
                    </IconButton>
                </div>
            </Grid>
        </Grid> 
    
    );
}

