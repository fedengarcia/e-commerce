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
import {useHistory} from 'react-router-dom';
import {Animated} from "react-animated-css";


const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item ({precio,marca,categoria,urlImg,id,modelo}) {

  const classes = useStyles();
  const history = useHistory();
  
  // const [itemList, setItemList] = useState(0);

  // const handleAddProduct = () => {
  //   setItemList(itemList + 1);
  // };

  return (
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true} className={classes.root}>

    <Card className={classes.cardContainer}>
       
      <CardMedia
        className={classes.media}
        image = {urlImg}
        title="Imagen del Producto"
      />

      <CardHeader
        title={"Zapatillas de " + categoria + " " + marca}
        subheader={modelo} 
      />
      
      <CardContent>
          <Typography variant="h4">${parseFloat(precio)}</Typography>
      </CardContent>
      <div className={classes.actionContainer}>

      <CardActions disableSpacing>
      <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={() => history.push(`/item/${id-1}`)}
        >
            <Typography>Ver detalle</Typography>
        </Button>
      </CardActions>
      </div>
    </Card>
    </Animated>
  );
}


