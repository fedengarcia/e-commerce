import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemDetailStyle} from './ItemDetailStyle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';

const useStyle = makeStyles ((theme) => ItemDetailStyle(theme));

export default function ItemDetail ({urlImg,type,model,price,cantidad}) {
    const classes = useStyle();

    return (
        <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={urlImg}
        title="Imagen del Producto"
        alt="Imagen del producto"
      />
      <CardHeader
        title={type}
        subheader={model}
       
      />
      <CardContent>
          <Typography variant="h4">${parseFloat(price)}</Typography>
      </CardContent>
      <ItemCount cantidad={cantidad}/>
      <div className={classes.actionContainer}>

      <CardActions disableSpacing>
        <Button
            className={classes.button}
            variant="contained"
            size="large"
        >
            <Typography>Agregar al carrito</Typography>
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}