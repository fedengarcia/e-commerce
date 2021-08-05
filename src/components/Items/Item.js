import React from 'react';
import {ItemStyle} from './ItemStyle';
import {makeStyles, Card,CardHeader,CardMedia,CardContent,CardActions,Button, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import useImgRef from '../useImgRef/useImgRef';


const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item (props) {

  const classes = useStyles();
  const history = useHistory();
  const imgRef = useImgRef(props.urlImg)
  

  return (
    <div className={classes.rootItem}>

    <Card className={classes.cardContainer}>

      {imgRef && <CardMedia
        className={classes.media}
        image = {imgRef}
        title="Imagen del Producto en venta"
        alt="Imagen del producto en venta"
      />}

      <div>
      <CardHeader
        title={`Zapatillas de  ${props.categoria} ${props.marca}`}
        subheader={props.modelo} 
      />
      
      <CardContent>
          <Typography variant="h4">{`${parseFloat(props.precio)}`}</Typography>
      </CardContent>
      <div className={classes.actionContainer}>

      <CardActions disableSpacing>
      <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={() => history.push(`/item/${props.id}`)}
        >
            <Typography>{`Ver detalle`}</Typography>
        </Button>
      </CardActions>
      </div>
      </div>
    </Card>
    </div>
  );
}


