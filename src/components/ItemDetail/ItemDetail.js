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
// import {useParams} from 'react-router-dom';
import {Animated} from "react-animated-css";


const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export default function Item ({precio,marca,categoria,urlImg,cantidad,talle,descripcion,modelo}) {
  const classes = useStyles();
  // const id = useParams();
  
  // const [itemList, setItemList] = useState(0);

  // const handleAddProduct = () => {
  //   setItemList(itemList + 1);
  // };

  return (
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true} className={classes.root}>
      <Card className={classes.cardContainer}>
          <CardMedia
          className={classes.media}
          image={urlImg}
          title="Imagen del Producto"
          alt="Imagen del producto"
        />
        <CardHeader
          title={"Zapatillas de " + categoria + " " + marca}
          subheader={modelo}
        
        />
        <CardContent>
            <Typography variant="h4">${parseFloat(precio)}</Typography>
            <Typography variant="h6">{descripcion}</Typography>
        </CardContent>
        <div className={classes.actionContainer}>


        <ItemCount cantidad={cantidad}/>

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
    </Animated>
  );
}


