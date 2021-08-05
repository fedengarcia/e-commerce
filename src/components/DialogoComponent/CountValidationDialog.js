import React from 'react'
import DialogComponent from '../DialogoComponent/DialogComponent';


const ValidationDialog = ({openCountValidationDialog,setOpenCountValidationDialog}) => {



    return (<DialogComponent
        open={openCountValidationDialog}
        openDialog={setOpenCountValidationDialog}
        closeDialog={()=> setOpenCountValidationDialog(false)}
        handleAcceptCountDialog={()=> setOpenCountValidationDialog(false)}
        title="No indica cantidad"
        secondButton="Aceptar"

        >
            Indique cuantas unidades desea comprar.
        </DialogComponent>)
}

export default ValidationDialog;