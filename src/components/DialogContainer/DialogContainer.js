import React,{useState, useContext, useEffect} from 'react';
import {ModeContext} from '../../Context/CartContext';
import {useParams} from 'react-router-dom';
import CountValidationDialog from '../DialogoComponent/CountValidationDialog';
import TrashDialog from '../DialogoComponent/TrashDialog';
import CleanCartDialog from '../DialogoComponent/CleanCartDialog';
import FormDialogError from '../DialogoComponent/FormDialogError';
import EndBuyDialog from '../DialogoComponent/EndBuyDialog';

export default function DialogContainer () { 
    const [openTrashDialog, setOpenTrashDialog] = useState(false);
    const [openFormDialogError, setOpenFormDialogError] = useState (false);
    const [openEndBuyDialog,setOpenEndBuyDialog] = useState(false);
    const [openCleanCartDialog, setOpenCleanCartDialog] = useState (false);
    const [openCountValidationDialog,setOpenCountValidationDialog] = useState(false);
    const {removeItem,clear,itemTrashId,idCompra} = useContext(ModeContext);
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
            if(dialogType === "formDialogError"){
                setOpenFormDialogError(true);
            }
            if(dialogType === "endBuyDialog"){
                setOpenEndBuyDialog(true);
            }
        }
    }, [dialogType]);


    
    return <>

        {openTrashDialog && TrashDialog({openTrashDialog,itemTrashId,removeItem,setOpenTrashDialog})}
        {openCleanCartDialog && CleanCartDialog({openCleanCartDialog,setOpenCleanCartDialog,clear})}
        {openFormDialogError && FormDialogError({openFormDialogError,setOpenFormDialogError})}
        {openEndBuyDialog && EndBuyDialog({openEndBuyDialog,setOpenEndBuyDialog,clear,idCompra})}
        {openCountValidationDialog && CountValidationDialog ({openCountValidationDialog,setOpenCountValidationDialog})}

    </>

}