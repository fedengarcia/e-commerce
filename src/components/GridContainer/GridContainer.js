import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';


const product = {
    model:"Nike Hypedunk 2020",
    price:20,
    type:'Zapatillas de Basquet',
    urlImage: ''
  }

const GridContainer = () => {

    return(
        <>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item sx={12} md={4} sm={6}>
          <Card {...product}></Card>
        </Grid>

        <Grid item sx={12} md={4} sm={6}>
          <Card {...product}></Card>
        </Grid>

        <Grid item sx={12} md={4} sm={6} >
          <Card {...product}></Card>
        </Grid>

        <Grid item sx={12} md={4} sm={6}>
          <Card {...product}></Card>
        </Grid>
        
        <Grid item sx={12} md={4} sm={6}>
          <Card {...product}></Card>
        </Grid>

        <Grid sx={12} md={4} sm={6}>
          <Card {...product}></Card>
        </Grid>

        <Grid item xs={12}>
          <Button>CARGAR MAS</Button>
        </Grid>
      
      </Grid>
      </>
    );
}

export default GridContainer;