import React, {useState,useContext, useEffect} from 'react';
import {makeStyles, Card,CardHeader,CardMedia,CardContent,CardActions,Button, Typography} from '@material-ui/core';
import {ItemStyle} from './ItemStyle';
import ItemCount from '../ItemCount/ItemCount';
import {ModeContext} from '../../Context/CartContext';
import {useHistory} from 'react-router-dom';
import {getStorageRef} from '../../Firebase/firebase';


const useItemDetailStyles = makeStyles((theme) => ItemStyle(theme));


export default function ItemDetail (props) {
  const [finishButton, setFinishButton] = useState(false);
  const [amount, setAmount] = useState(0);
  const [imgRef,setImgRef] = useState(null);


  const classes = useItemDetailStyles();
  const history = useHistory();
  const {addItem} = useContext(ModeContext);

  useEffect(() => {
    if(props.urlImg){
      const storageRef = getStorageRef();
      const finalRef = storageRef.child(props.urlImg);
    
      finalRef.getDownloadURL().then((URL) => {
        setImgRef(URL);
      })

    }

  }, [props]);

  const handleAddCart = (amount) => {
    if(amount > 0){
      setFinishButton(true);
    }else{
      setFinishButton(false);
      history.push('/dialog/countValidationDialog');
    }
  };


  const handleEndBuying = (item,amount) => {
    if(amount > 0){
      const itemCart = {
        item:item,
        "quantity": amount,
      }
        addItem(itemCart);
        history.push(`/cart`);
    }
  }

  const handleCancel = () => {
    setFinishButton(false);
  }



  const renderFinishBuying = (stock,setAmount) => {
    if (finishButton){
      return <Button
      className={classes.button}
      variant="contained"
      size="large"
      onClick={() => handleEndBuying(props,amount)}
      >
        <Typography>Terminar mi compra</Typography>
      </Button>
    }else{
      return <ItemCount stock={stock} setAmount={setAmount}/>
    }

  }


  const renderAddCart = (handleCancel,handleAddCart,amount) => {
    if (finishButton){
      return <Button
        className={classes.button}
        variant="contained"
        size="large"
        onClick={handleCancel}
        >
          <Typography>Cancelar</Typography>
        </Button>
    }else{
      return <Button
      className={classes.button}
      variant="contained"
      size="large"
      onClick={() => handleAddCart(amount)}
    >
      <Typography>Agregar al carrito</Typography>
    </Button>
    
    }
  }
 


  return (
    <div className={classes.rootItemDetail}>
      <Card className={classes.cardContainer}>
        {imgRef && <CardMedia
        className={classes.media}
        image={imgRef}
        title="Imagen del Producto"
        alt="Imagen del producto"
        />}
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
            {renderAddCart(handleCancel,handleAddCart,amount)}
          </CardActions>
        </div>
      </Card>
      
    </div>
  );
}


