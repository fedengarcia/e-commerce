import React, {useState,useContext, useEffect} from 'react';
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
import {getStorageRef} from '../../Firebase/firebase';
import DialogComponent from '../DialogoComponent/DialogComponent';


const useStyles = makeStyles((theme) => ItemDetailStyle(theme));

export default function ItemDetail (props) {
  const [finishButton, setFinishButton] = useState(false);
  const [amount, setAmount] = useState(0);
  const [item, setItem] = useState([]);
  const [imgRef,setImgRef] = useState(null);
  const [openCountAlertDialog, setOpenCountAlertDialog] = useState(false);


  const classes = useStyles();
  const history = useHistory();
  const {addItem} = useContext(ModeContext);

  useEffect(() => {
    setItem(props)
    if(props.urlImg){
      const storageRef = getStorageRef();
      const finalRef = storageRef.child(props.urlImg);
    
      finalRef.getDownloadURL().then((URL) => {
        setImgRef(URL);
      }).catch(err => {
        console.log(err);
      });

    }

  }, [props]);

  const handleAddCart = () => {
    
    setFinishButton(true);
  };


  const handleEndBuying = (item,amount) => {
    if(amount > 0){
      const itemCart = {
        "item": {
          categoria:item.categoria,
          descripcion: item.descripcion,
          id:item.id,
          marca:item.marca,
          modelo:item.modelo,
          precio:item.precio,
          urlImg:item.urlImg,

        },
        "quantity": amount,
      }
        addItem(itemCart);
        history.push(`/cart`);
    }else{
      setOpenCountAlertDialog(true);
      setFinishButton(false);
    }
    
  }

  
  const handleCancel = () => {
    setFinishButton(false);
  }



  const renderFinishBuying = (stock,setAmount) => {
    if (finishButton === false){
      return <ItemCount stock={stock} setAmount={setAmount}/>
    }else{
      return <Button
      className={classes.button}
      variant="contained"
      size="large"
      onClick={() => handleEndBuying(item,amount)}
      >
        <Typography>Terminar mi compra</Typography>
      </Button>
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
 


  const renderItemDetail = (openCountAlertDialog,openCleanCartDialog) => {
    if(openCountAlertDialog){
      return <DialogComponent
      open={openCountAlertDialog}
      openDialog={setOpenCountAlertDialog}
      closeDialog={() => setOpenCountAlertDialog(false)}
      handleConfirm={() => setOpenCountAlertDialog(false)}
      firstButton="Aceptar"
      >
      
      Se requiere comprar al menos un producto para poder continuar...
    </DialogComponent>
    }else{
      return <Card className={classes.cardContainer}>
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
          {renderAddCart(handleCancel,handleAddCart)}
        </CardActions>
      </div>
      </Card>
    }
}

  return (
    <div className={classes.root}>
      {renderItemDetail(openCountAlertDialog)}
      
    </div>
  );
}


