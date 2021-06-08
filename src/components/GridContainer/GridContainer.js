import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridStyle} from './GridStyle';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

const product = {
    model:"Nike Hypedunk 2020",
    price:20,
    type:'Zapatillas de Basquet',
    urlImage: ''
  }

  
const useStyles = makeStyles((theme) => GridStyle(theme));

const GridContainer = () => {
    const classes = useStyles();
    return(
        <>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>
        <Grid item sx={12} md={4} sm={6} > 
        <div className={classes.cardItem}><Card {...product}></Card></div>
        </Grid>

        <Grid item xs={12}>
        <div className={classes.cardItem}>
            
            <IconButton
                className={classes.iconAdd}
            >
                <AddCircleOutlineIcon style={{fontSize:"1.5em"}}/>
            </IconButton>
            

            </div>
        </Grid>
      
      </Grid>
      </>
    );
}

export default GridContainer;