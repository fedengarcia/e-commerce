import React,{useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CartContainerStyle} from './CartContainerStyle';
import {ModeContext} from '../../Context/CartContext';
import CartList from '../CartList/CartList';
import DialogComponent from '../DialogoComponent/DialogComponent';
import Form from '../Form/Form';


const useStyle = makeStyles ((theme) => CartContainerStyle(theme));


export default function CartContainer  () {
    const {getItems,removeItem,clear,newOrder} = useContext(ModeContext);
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [itemTrashId, setItemTrashId] = useState(undefined);
    const [openFormDialog, setOpenFormDialog] = useState (false);
    const [openCleanCartDialog, setOpenCleanCartDialog] = useState (false);
    const [openEndBuying,setOpenEndBuying] = useState(false);
    const [idCompra,setIdCompra] = useState(undefined);

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

    const renderFormDialog = (openFormDialog,newOrder) => {
        return <DialogComponent
        open={openFormDialog}
        openDialog={setOpenFormDialog}
        closeDialog={()=> setOpenFormDialog(false)}
        handleConfirm={()=> setOpenFormDialog(false)}
        handleEndBuying={()=> setOpenEndBuying(true)}
        title="Completa el formulario para continuar"
        firstButton="Comprar"
        secondButton="Cancelar"
        newOrder = {newOrder}
        clearCart={() => clear()}
        setIdCompra={(idCompra) => setIdCompra(idCompra)}

        >
            <Form/>
        </DialogComponent>
    }


    const renderOpenEndBuying = (openEndBuying,idCompra) => {
        return <DialogComponent
        open={openEndBuying}
        openDialog={setOpenEndBuying}
        closeDialog={()=> setOpenEndBuying(false)}
        handleConfirm={()=> setOpenEndBuying(false)}
        title={idCompra === undefined ? "Procesando compra..." : "Compra Finalizada"}
        firstButton="Aceptar"

        >
            {idCompra && `Tu compra fue procesada con exito, tu ID de compra es: ${idCompra}`}
        </DialogComponent>
    }

    const renderCartContainer = (openTrashDialog,openCleanCartDialog,openFormDialog,itemTrashId,newOrder,openEndBuying,idCompra) => {
        if(openTrashDialog){
            return <>
                {renderTrashDialog(openTrashDialog,itemTrashId)}
            </>
        }else if (openFormDialog) {
            return <>
                {renderFormDialog(openFormDialog,newOrder)}
            </> 
        }else if (openCleanCartDialog) {
            return <>
                {renderCleanCartDialog(openCleanCartDialog)}
            </>
        }else if (openEndBuying) {
            return <>
                {renderOpenEndBuying(openEndBuying,idCompra)}
            </>
        }else{
            return <CartList className={classes.cartListStyle} items={items} setOpenFormDialog={setOpenFormDialog} setOpenTrashDialog={setOpenTrashDialog} setItemTrashId={setItemTrashId} setOpenCleanCartDialog={setOpenCleanCartDialog}/>
        }
    }

    return <div className={classes.gridContainer}>
        
        {renderCartContainer(openTrashDialog,openCleanCartDialog,openFormDialog,itemTrashId,newOrder,openEndBuying,idCompra)}

    </div>
}