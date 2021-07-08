import React,{useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CartContainerStyle} from './CartContainerStyle';
import {ModeContext} from '../../Context/CartContext';
import CartList from '../CartList/CartList';
import DialogComponent from '../DialogoComponent/DialogComponent';

const useStyle = makeStyles ((theme) => CartContainerStyle(theme));


export default function CartContainer  () {
    const {getItems,removeItem} = useContext(ModeContext);
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [itemTrashId, setItemTrashId] = useState(undefined);
    const [openFormDialog, setOpenFormDialog] = useState (false);

    const items = getItems();
    const classes = useStyle();

    console.log("CART CONTAINER TRASH =", openTrashDialog);
    console.log("ID DE ELEMENTO A ELIMINAR =", itemTrashId);

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

    const renderFormDialog = (openFormDialog) => {
        <DialogComponent>
            
        </DialogComponent>
    }


    const renderCartContainer = (openTrashDialog,openFormDialog,itemTrashId) => {
        if(openTrashDialog){
            return <>
                {renderTrashDialog(openTrashDialog,itemTrashId)}
            </>
        }else if (openFormDialog) {
            return <>
                {renderFormDialog(openFormDialog)}
            </> 
        }else{
            return <CartList items={items} setOpenTrashDialog={setOpenTrashDialog} setItemTrashId={setItemTrashId}/>
        }
    }

    return <div className={classes.gridContainer}>
        
        {renderCartContainer(openTrashDialog,openFormDialog,itemTrashId)}

    </div>
}