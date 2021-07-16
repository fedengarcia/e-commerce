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

                for (let index = 0; index < newOrder.items.length; index++) {
                    const id = newOrder.items[index].item.id
                    const quantity = newOrder.items[index].quantity
                    
                    const item = dataBase.collection("items").doc(id);
                
                    item.get().then((doc) => {
                        if (doc.exists) {
                            const item_stock = doc.data().stock;
                            item.update({stock: item_stock - quantity});
                        } else {
                            console.log("Document not exist!");
                        }
                    }).catch(function(error) {
                        console.log("Error get document:", error);
                    });
                  }

                // updateStock(newOrder);
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