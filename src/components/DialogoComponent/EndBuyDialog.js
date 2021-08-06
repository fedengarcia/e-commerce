import React from 'react'
import DialogComponent from '../DialogoComponent/DialogComponent';


const EndBuyDialog = ({openEndBuyDialog,setOpenEndBuyDialog,clear,idCompra}) => {



    return (<DialogComponent
        open={openEndBuyDialog}
        openDialog={setOpenEndBuyDialog}
        closeDialog={()=> setOpenEndBuyDialog(false)}
        handleAcceptFinishDialog={()=> setOpenEndBuyDialog(false)}
        clearCart={() => clear()}
        title={idCompra === undefined ? "Procesando compra..." : "Compra Finalizada"}
        secondButton="Aceptar"

        >
            {idCompra && `Tu compra fue procesada con exito, tu ID de compra es: ${idCompra}`}
        </DialogComponent>)
}

export default EndBuyDialog;