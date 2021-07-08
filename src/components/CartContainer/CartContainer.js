import React,{useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CartContainerStyle} from './CartContainerStyle';
import {ModeContext} from '../../Context/CartContext';
import CartList from '../CartList/CartList';
import DialogComponent from '../DialogoComponent/DialogComponent';

const useStyle = makeStyles ((theme) => CartContainerStyle(theme));


export default function CartContainer  () {
    const {getItems,removeItem,clear} = useContext(ModeContext);
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [itemTrashId, setItemTrashId] = useState(undefined);
    const [openFormDialog, setOpenFormDialog] = useState (false);
    const [openCleanCartDialog, setOpenCleanCartDialog] = useState (false);

    const items = getItems();
    const classes = useStyle();

    const renderTrashDialog = (openTrashDialog,itemTrashId) => {
        return <DialogComponent
            open={openTrashDialog}
            openDialog={setOpenTrashDialog}
            closeDialog={() => setOpenTrashDialog(false)}
            handleConfirm={() => setOpenTrashDialog(false)}
            title="Confirmar"
            firstButton="Aceptar"
            secondButton="Cancelar"
            removeItem={() => removeItem(itemTrashId)}
            >
            Estas seguro que desea eliminarlo del carrito?
            </DialogComponent>
        
    }

    const renderCleanCartDialog = (openCleanCartDialog) => {
        console.log("ENTRO PAPA AL CLEAN CART")
        return <DialogComponent
            open={openCleanCartDialog}
            openDialog={setOpenCleanCartDialog}
            closeDialog= {()=> setOpenCleanCartDialog(false)}
            handleConfirm={()=> setOpenCleanCartDialog(false)}
            title="Vaciar Carrito"
            firstButton="Aceptar"
            secondButton="Cancelar"
            clearCart={() => clear()}
            >
              Estas seguro que deseas vaciar el carrito?
            </DialogComponent>

    }

    const renderFormDialog = (openFormDialog) => {
        <DialogComponent>
            
        </DialogComponent>
    }


    const renderCartContainer = (openTrashDialog,openCleanCartDialog,openFormDialog,itemTrashId) => {
        if(openTrashDialog){
            return <>
                {renderTrashDialog(openTrashDialog,itemTrashId)}
            </>
        }else if (openFormDialog) {
            return <>
                {renderFormDialog(openFormDialog)}
            </> 
        }else if (openCleanCartDialog) {
            return <>
                {renderCleanCartDialog(openCleanCartDialog)}
            </>
        }else{
            return <CartList items={items} setOpenTrashDialog={setOpenTrashDialog} setItemTrashId={setItemTrashId} setOpenCleanCartDialog={setOpenCleanCartDialog}/>
        }
    }

    return <div className={classes.gridContainer}>
        
        {renderCartContainer(openTrashDialog,openCleanCartDialog,openFormDialog,itemTrashId,)}

    </div>
}