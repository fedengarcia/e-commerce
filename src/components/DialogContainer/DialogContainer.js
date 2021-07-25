import React,{useState, useContext, useEffect} from 'react';
import {ModeContext} from '../../Context/CartContext';
import DialogComponent from '../DialogoComponent/DialogComponent';
import Form from '../Form/Form';
import {useParams} from 'react-router-dom';


export default function DialogContainer () { 
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [openFormDialog, setOpenFormDialog] = useState (false);
    const [openConfirmBuyDialog,setOpenConfirmBuyDialog] = useState(false);
    const [openCleanCartDialog, setOpenCleanCartDialog] = useState (false);
    const [idCompra,setIdCompra] = useState(undefined);

    const {removeItem,clear,newOrder,itemTrashId} = useContext(ModeContext);

    const {dialogType} = useParams();

    useEffect(() => {
       if(dialogType !== undefined){
            if(dialogType === "cleanCartDialog"){
               setOpenCleanCartDialog(true);
            }
            if(dialogType === "trashDialog"){
                setOpenTrashDialog(true);
            }
            if(dialogType === "formDialog"){
                setOpenFormDialog(true);
            }
            if(dialogType === "endBuyDialog"){
                setOpenConfirmBuyDialog(true);
            }
        }
    }, [dialogType]);

    const renderTrashDialog = (openTrashDialog,itemTrashId) => {
        return <DialogComponent
            open={openTrashDialog}
            openDialog={setOpenTrashDialog}
            closeDialog={() => setOpenTrashDialog(false)}
            handleConfirm={() => setOpenTrashDialog(false)}
            title="Confirmar"
            firstButton="Cancelar"
            secondButton="Eliminar"
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
            firstButton="Cancelar"
            secondButton="Vaciar"
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
        handleEndBuying={()=> setOpenConfirmBuyDialog(true)}
        title="Completa el formulario para continuar"
        firstButton="Cancelar"
        secondButton="Comprar"
        newOrder = {newOrder}
        clearCart={() => clear()}
        setIdCompra={(idCompra) => setIdCompra(idCompra)}

        >
            <Form/>
        </DialogComponent>
    }

    const renderConfirmBuyDialog = (openConfirmBuyDialog,idCompra) => {
        return <DialogComponent
        open={openConfirmBuyDialog}
        openDialog={setOpenConfirmBuyDialog}
        closeDialog={()=> setOpenConfirmBuyDialog(false)}
        handleFinish={()=> setOpenConfirmBuyDialog(false)}
        title={idCompra === undefined ? "Procesando compra..." : "Compra Finalizada"}
        secondButton="Aceptar"

        >
            {idCompra && `Tu compra fue procesada con exito, tu ID de compra es: ${idCompra}`}
        </DialogComponent>
    }

    
    return <>
        {openTrashDialog && renderTrashDialog(openTrashDialog,itemTrashId)}
        {openCleanCartDialog && renderCleanCartDialog(openCleanCartDialog)}
        {openFormDialog && renderFormDialog(openFormDialog,newOrder)}
        {openConfirmBuyDialog && renderConfirmBuyDialog(openConfirmBuyDialog,idCompra)}

    </>

}