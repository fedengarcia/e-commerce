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

export default function ItemDetail (props) {
  //STATES
  const [finishButton, setFinishButton] = useState(false);
  const [amount, setAmount] = useState(0);
  const [item, setItem] = useState(props)

  //HOOKS
  const classes = useStyles();
  const history = useHistory();
  const {addItem} = useContext(ModeContext);


  const handleAddCart = () => {
    setFinishButton(true);
  };


  const handleEndBuying = (item,amount) => {
    const itemCart = {
      "item": item,
      "quantity": amount,
    }
      addItem(itemCart);
      history.push(`/cart`);
  }

  
  const handleCancel = () => {
    setFinishButton(false);
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
        onClick={() => handleEndBuying(item,amount)}
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
          image={props.urlImg}
          title="Imagen del Producto"
          alt="Imagen del producto"
        />
        <CardHeader
          title={`Zapatillas de ${props.categoria} ${props.marca}`}
          subheader={props.modelo}
        
        />
        <CardContent>
            <Typography variant="h4">{`$ ${parseFloat(props.precio)}`}</Typography>
            <Typography variant="h6">{props.descripcion}</Typography>
            <Typography variant="h6">{`Cantidad: ${props.stock}`}</Typography>
        </CardContent>
        <div className={classes.actionContainer}>


        {renderFinishBuying(props.stock,setAmount)}

        <CardActions>
        
        {renderAddCart(handleCancel,handleAddCart)}

        </CardActions>
        
        </div>
      </Card>
    </div>
  );
}


