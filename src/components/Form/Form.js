import React,{useState, useContext, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { FormStyle } from './FormStyle';
import {ModeContext} from '../../Context/CartContext'

const useStyles = makeStyles((theme) => FormStyle(theme));


export default function Form () {
    const classes = useStyles();
    const [buyerInfo, setBuyerInfo] = useState({});
    
    const {saveBuy} = useContext(ModeContext);

    useEffect(() => {
        saveBuy(buyerInfo)
    }, [buyerInfo]);


    const handleNameData = (e) => {
        setBuyerInfo({name: e.target.value})
    }

    const handleApellidoData = (e) => {
        setBuyerInfo({apellido: e.target.value})
    }

    const handleEmailData = (e) => {
        setBuyerInfo({email: e.target.value})
    }

    const handlePhoneData = (e) => {
        setBuyerInfo({phone: e.target.value})
    }


    return <form className={classes.formContainer}>
        <TextField className={classes.formInput} size="medium" color="secondary" required id="nameId"  placeholder="Nombre" type="input" onChange={handleNameData}/>
        <TextField className={classes.formInput} size="medium" color="secondary" required id="apellidoId"  placeholder="Apellido" type="input" onChange={handleApellidoData}/>
        <TextField className={classes.formInput} size="medium" color="secondary" required id="emailId"  placeholder="Email" type="input" onChange={handleEmailData}/>
        <TextField className={classes.formInput} size="medium" color="secondary" required id="numberId"  placeholder="Numero de telefono" type="input" onChange={handlePhoneData}/>


    </form>
}