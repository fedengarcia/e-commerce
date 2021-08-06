import React,{useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import { FormStyle } from './FormStyle';
import {ModeContext} from '../../Context/CartContext'
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => FormStyle(theme));



export default function Form () {
    const classes = useStyles();
    const [buyerInfo, setBuyerInfo] = useState({
        nombre: "",
        apellido: "",
        email:"",
        phone:"",
    });
    const history = useHistory();

    const {saveBuy} = useContext(ModeContext);


    const handleNameData = (e) => {
        setBuyerInfo({...buyerInfo,nombre: e.target.value})
    }

    const handleApellidoData = (e) => {
        setBuyerInfo({...buyerInfo,apellido: e.target.value})
    }

    const handleEmailData = (e) => {
        setBuyerInfo({...buyerInfo,email: e.target.value})
    }

    const handlePhoneData = (e) => {
        setBuyerInfo({...buyerInfo,phone: e.target.value})
    }


    const handleAccept = () => {
        var hasNumber = /\d/;   
     
        if(buyerInfo.nombre === "" || buyerInfo.apellido === "" || buyerInfo.email === "" || buyerInfo.phone === ""){
            history.push('/dialog/formDialogError');
        }else if ( hasNumber.test(buyerInfo.nombre) || hasNumber.test(buyerInfo.apellido)) {
            history.push('/dialog/formDialogError');
        } else if (!buyerInfo.email.includes("@")) {
            history.push('/dialog/formDialogError');
        }else{
            console.log(buyerInfo);
            history.push('/dialog/endBuyDialog');
        }
    }

    return <form className={classes.formContainer}>
            <TextField className={classes.formInput} size="medium" autoComplete="off"   color="secondary" id="nameId"  placeholder="Nombre" type="input" onChange={handleNameData}/>
            <TextField className={classes.formInput} size="medium" autoComplete="off"   color="secondary"  id="apellidoId"  placeholder="Apellido" type="input" onChange={handleApellidoData}/>
            <TextField className={classes.formInput} size="medium" autoComplete="off"   color="secondary"  id="emailId"  placeholder="Email" type="input" onChange={handleEmailData}/>
            <TextField className={classes.formInput} size="medium" autoComplete="off"   color="secondary"  id="numberId"  placeholder="Numero de telefono" type="input" onChange={handlePhoneData}/>
            <div>
                <Button
                    className={classes.buttonStyle}
                    variant="contained"
                    size="large"
                    type='Submit'
                    onClick={() => handleAccept()}
                >Aceptar</Button>
                <Link to="/cart" className={classes.linkStyle}>
                <Button
                    className={classes.buttonStyle}
                    variant="contained"
                    size="large"
                >Cancelar</Button></Link>
            </div>
        </form>
        
}
    

