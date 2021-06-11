import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListContainerStyle} from './ItemListContainerStyle';
import Grid from '@material-ui/core/Grid';
import ItemList from '../ItemList/ItemList';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));


export default function ItemListContainer ({data}) {
    const classes = useStyles();
    const [flagId, setFlagId] = useState(6);

    const handleAddButton = () => {
        setFlagId(flagId * 2);
    }

    return(

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >

            <ItemList data={data.data} flagId={flagId}/>

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

