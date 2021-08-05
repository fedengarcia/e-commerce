import React from 'react'
import DialogComponent from '../DialogoComponent/DialogComponent';


const TrashDialog = ({openTrashDialog,setOpenTrashDialog,itemTrashId,removeItem}) => {


    return (<DialogComponent
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
    </DialogComponent>)
}

export default TrashDialog;