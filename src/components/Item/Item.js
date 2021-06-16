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

const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item ({price,type,model,urlImg}) {
  const classes = useStyles();
  
  // const [itemList, setItemList] = useState(0);

  // const handleAddProduct = () => {
  //   setItemList(itemList + 1);
  // };

  return (
    <Card className={classes.root}>
       
      <CardMedia
        className={classes.media}
        image = {urlImg}
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
        >
            <Typography>Ver detalle</Typography>
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}


