import React, {useState,useEffect} from 'react';
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
import {getStorageRef} from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item (props) {

  const classes = useStyles();
  const history = useHistory();
  const [imgRef,setImgRef] = useState(null);
  
  useEffect(() => {

    if(props.urlImg){
      const storageRef = getStorageRef();
      const finalRef = storageRef.child(props.urlImg);
    
      finalRef.getDownloadURL().then((URL) => {
        setImgRef(URL);
      }).catch(err => {
        console.log(err);
      });

    }

  }, [props.urlImg]);


  return (
    <div className={classes.root}>

    <Card className={classes.cardContainer}>

      {imgRef && <CardMedia
        className={classes.media}
        image = {imgRef}
        title="Imagen del Producto"
        alt="Imagen del producto"
      />}

      <div>
      <CardHeader
        title={"Zapatillas de " + props.categoria + " " + props.marca}
        subheader={props.modelo} 
      />
      
      <CardContent>
          <Typography variant="h4">${parseFloat(props.precio)}</Typography>
      </CardContent>
      <div className={classes.actionContainer}>

      <CardActions disableSpacing>
      <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={() => history.push(`/item/${props.id}`)}
        >
            <Typography>Ver detalle</Typography>
        </Button>
      </CardActions>
      </div>
      </div>
    </Card>
    </div>
  );
}


