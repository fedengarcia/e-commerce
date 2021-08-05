import React from 'react'
import DialogComponent from '../DialogoComponent/DialogComponent';


const TrashDialog = ({openCleanCartDialog,setOpenCleanCartDialog,clear}) => {


    return (<DialogComponent
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
            </DialogComponent>)
}

export default TrashDialog;