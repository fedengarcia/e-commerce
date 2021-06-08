import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardStyle} from './CardStyle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => CardStyle(theme));

export default function ProductCard({price,model,urlImage,type}) {
  const classes = useStyles();
  const [itemProduct, setItemProduct] = useState(0);

  const handleAddProduct = () => {
    setItemProduct(itemProduct + 1);
  };

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={urlImage}
        title="Imagen del Producto"
      />
      <CardHeader
        title={type}
        subheader={model}
       
      />
      <CardContent>
          <Typography variant="h4">${parseFloat(price)}</Typography>
      </CardContent>
      
      <div className={classes.actionContainer}>
      <CardActions disableSpacing>
        <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={handleAddProduct}
        >
            <Typography>Agregar al carrito</Typography>
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}