import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FormContainerStyle } from './FormContainerStyle.'
import Form from '../Form/Form';


const useStyles = makeStyles((theme => FormContainerStyle(theme)));


export default function FormContainer () {
    const classes = useStyles();


    return (<div className={classes.root}>
        <div className={classes.titleContainer}>
            <h2>Completa el formulario para terminar la compra</h2>
        </div>
        
        <Form/>
    
    </div>)
}