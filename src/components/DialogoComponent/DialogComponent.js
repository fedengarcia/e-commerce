import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {dataBase} from '../../Firebase/firebase';
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
        newOrder,
        setIdCompra,
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
        if(newOrder){
            dataBase.collection("orders").add(newOrder).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setIdCompra(docRef.id);
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

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            
            history.push('/dialog/endBuyDialog');
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