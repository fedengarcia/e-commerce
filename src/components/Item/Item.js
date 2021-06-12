import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemStyle} from './ItemStyle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import img from '../../img/d-rose-11-shoes.jpg';

const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item ({price,type,model,urlImg,cantidad}) {
  const classes = useStyles();
  // const [itemList, setItemList] = useState(0);

  // const handleAddProduct = () => {
  //   setItemList(itemList + 1);
  // };

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={img}
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


