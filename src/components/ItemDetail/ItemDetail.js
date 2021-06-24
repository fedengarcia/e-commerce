import React, {useState} from 'react';
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


const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export default function Item ({precio,marca,categoria,urlImg,stock,talle,descripcion,modelo}) {
  const classes = useStyles();
  
  const [addCart, setFinishButton] = useState(false);
  const [amount, setAmount] = useState(0);


  const handleAddCart = () => {
    setFinishButton(true);
  };

  const handleEndBuying = () => {
    console.log(amount);
  }

  const handleCancel = () => {
    setFinishButton(false);
  }


  const renderFinishBuying = (stock,setAmount) => {
    if (addCart === false){
      return <ItemCount stock={stock} setAmount={setAmount}/>
    }else{
      return <>
        <Button
        className={classes.button}
        variant="contained"
        size="large"
        onClick={handleEndBuying}
        >
          <Typography>Terminar mi compra</Typography>
        </Button>
    </>
    }
  }


  const renderAddCart = (handleCancel,handleAddCart) => {
    if (addCart === false){
      return  <>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={handleAddCart}
          >
            <Typography>Agregar al carrito</Typography>
          </Button>
          </>
    }else{
      return <Button
        className={classes.button}
        variant="contained"
        size="large"
        onClick={handleCancel}
        >
          <Typography>Cancelar</Typography>
        </Button>
  
    }
  }
 


  return (
    <div className={classes.root}>
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
            <Typography variant="h6">Stock: {stock}</Typography>
        </CardContent>
        <div className={classes.actionContainer}>


        {renderFinishBuying(stock,setAmount)}

        <CardActions>
        
        {renderAddCart(handleCancel,handleAddCart)}

        </CardActions>
        
        </div>
      </Card>
    </div>
  );
}


