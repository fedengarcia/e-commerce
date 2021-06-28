import React, {useState,useContext} from 'react';
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
import {ModeContext} from '../../Context/CartContext';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export default function ItemDetail ({id,precio,marca,categoria,urlImg,stock,descripcion,modelo}) {
  const classes = useStyles();
  const history = useHistory();
  const {addItem,removeItem,clear,isInCart} = useContext(ModeContext);

  const [finishButton, setFinishButton] = useState(false);
  const [amount, setAmount] = useState(0);

  const [item, setItem] = useState({
    "id": id,
    "precio": precio,
    "marca": marca,
    "categoria": categoria,
    "modelo": modelo,
    "descripcion": descripcion
  })


  const handleAddCart = () => {
    setFinishButton(true);
  };

  const handleEndBuying = () => {
    addItem(item,amount);
    history.push(`/cart`);
  }

  
  const handleCancel = () => {
    setFinishButton(false);
    clear();
  }


  const renderFinishBuying = (stock,setAmount) => {
    if (finishButton === false){
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
    if (finishButton === false){
      return <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={handleAddCart}
          >
            <Typography>Agregar al carrito</Typography>
          </Button>
          
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
          title={`Zapatillas de ${categoria} ${marca}`}
          subheader={modelo}
        
        />
        <CardContent>
            <Typography variant="h4">{`$ ${parseFloat(precio)}`}</Typography>
            <Typography variant="h6">{descripcion}</Typography>
            <Typography variant="h6">{`Cantidad: ${stock}`}</Typography>
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


