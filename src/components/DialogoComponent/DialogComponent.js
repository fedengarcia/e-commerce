import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {dataBase} from '../../Firebase/firebase';

// const useStyles = makeStyles ((theme) => DialogComponentStyle(theme));

export default function DialogComponent (props) {

    const {title, open, firstButton, secondButton, children, handleConfirm, closeDialog, openDialog, removeItem, clearCart, newOrder} = props;


    const handleClose = () => {
        if(closeDialog){
            closeDialog();
        }
        openDialog(false);
    }


    const handleAccept = () => {
        if(removeItem){
            removeItem();
        }
        if(clearCart){
            clearCart();
        }
        if(newOrder){
            console.log("CARGANDO NUEVA ORDEN", newOrder); 
            dataBase.collection("orders").add(newOrder)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            
        }
        handleConfirm();
    }


    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"center"}}>
            <Button onClick={() => handleAccept()} color="primary">{firstButton}</Button>
            <Button onClick={handleClose} color="primary">{secondButton}</Button>
        </DialogActions>
    </Dialog>
        
}