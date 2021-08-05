import React, {useState,useEffect} from 'react';
import {ItemStyle} from './ItemStyle';
import {makeStyles, Card,CardHeader,CardMedia,CardContent,CardActions,Button, Typography} from '@material-ui/core';
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
    <div className={classes.rootItem}>

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


