import React,{useState, useContext, useEffect} from 'react';
import {ModeContext} from '../../Context/CartContext';
import Form from '../Form/Form';
import {useParams} from 'react-router-dom';
import DialogComponent from '../DialogoComponent/DialogComponent';
import CountValidationDialog from '../DialogoComponent/CountValidationDialog';
import TrashDialog from '../DialogoComponent/TrashDialog';
import CleanCartDialog from '../DialogoComponent/CleanCartDialog';

export default function DialogContainer () { 
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [openFormDialog, setOpenFormDialog] = useState (false);
    const [openConfirmBuyDialog,setOpenConfirmBuyDialog] = useState(false);
    const [openCleanCartDialog, setOpenCleanCartDialog] = useState (false);
    const [openCountValidationDialog,setOpenCountValidationDialog] = useState(false);
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
            if(dialogType === "countValidationDialog"){
                setOpenCountValidationDialog(true);
            }
            if(dialogType === "formDialog"){
                setOpenFormDialog(true);
            }
            if(dialogType === "endBuyDialog"){
                setOpenConfirmBuyDialog(true);
            }
        }
    }, [dialogType]);



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
        handleAcceptFinishDialog={()=> setOpenConfirmBuyDialog(false)}
        title={idCompra === undefined ? "Procesando compra..." : "Compra Finalizada"}
        secondButton="Aceptar"

        >
            {idCompra && `Tu compra fue procesada con exito, tu ID de compra es: ${idCompra}`}
        </DialogComponent>
    }


    
    return <>
        {openTrashDialog && TrashDialog({openTrashDialog,itemTrashId,removeItem,setOpenTrashDialog})}
        {openCleanCartDialog && CleanCartDialog({openCleanCartDialog,setOpenCleanCartDialog,clear})}
        {openFormDialog && renderFormDialog({openFormDialog,newOrder})}
        {openConfirmBuyDialog && renderConfirmBuyDialog({openConfirmBuyDialog,idCompra})}
        {openCountValidationDialog && CountValidationDialog ({openCountValidationDialog,setOpenCountValidationDialog})}

    </>

}