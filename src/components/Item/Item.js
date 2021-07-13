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

export default function Item ({precio,marca,categoria,urlImg,id,modelo}) {

  const classes = useStyles();
  const history = useHistory();
  const [imgRef,setImgRef] = useState(null);
  
  useEffect(() => {
    if(urlImg){
      const storageRef = getStorageRef();
      const finalRef = storageRef.child(urlImg);
    
      finalRef.getDownloadURL().then((URL) => {
        setImgRef(URL);
      }).catch(err => {
        console.log(err);
      });

    }

  }, [urlImg]);

  return (
    <div className={classes.root}>

    <Card className={classes.cardContainer}>
       
      <CardMedia
        component="img"
        className={classes.media}
        image = {imgRef}
        title="Imagen del Producto"
        src={imgRef}
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
            onClick={() => history.push(`/item/${id}`)}
        >
            <Typography>Ver detalle</Typography>
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
  );
}


