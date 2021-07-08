import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';

// const useStyles = makeStyles ((theme) => DialogComponentStyle(theme));

export default function DialogComponent (props) {

    const {title, open, firstButton, secondButton, children, handleConfirm, closeDialog, openDialog, removeItem} = props;


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