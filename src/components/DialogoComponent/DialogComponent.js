import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';


export default function DialogComponent (props) {
    const history = useHistory();

    const {title, 
        open, 
        firstButton, 
        secondButton, 
        children, 
        handleConfirm, 
        closeDialog, 
        openDialog, 
        removeItem,
        clearCart, 
        handleAcceptFinishDialog,
        handleAcceptCountDialog,
        } = props;


    const handleClose = () => {
        if(closeDialog){
            closeDialog();
        }
        openDialog(false);
        history.push('/cart');
    }


    const handleAccept = () => {
        if(removeItem){
            removeItem();
            history.push('/cart');
        }
        if(clearCart){
            clearCart();
            history.push('/cart');
        }
        if(handleAcceptFinishDialog){
            handleAcceptFinishDialog();
            history.push('/cart');
        }
        if(handleAcceptCountDialog){
            handleAcceptCountDialog();
            history.push('/');
        }
        if(handleConfirm){
            handleConfirm();
        }
    }


    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"center"}}>
            {firstButton && <Button onClick={handleClose} color="primary">{firstButton}</Button>}
            {secondButton && <Button onClick={() => handleAccept()} color="primary">{secondButton}</Button>}
        </DialogActions>
    </Dialog>
        
}