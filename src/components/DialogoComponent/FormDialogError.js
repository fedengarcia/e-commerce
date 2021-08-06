import React from 'react'
import DialogComponent from '../DialogoComponent/DialogComponent';


const FormDialogError = ({openFormDialogError,setOpenFormDialogError}) => {


    return (<DialogComponent
        open={openFormDialogError}
        openDialog={setOpenFormDialogError}
        closeDialog={()=> setOpenFormDialogError(false)}
        handleConfirm={()=> setOpenFormDialogError(false)}
        title="Error al procesar el formulario"
        firstButton="Aceptar"

        >
            Verifica que los campos del formulario esten correctamente completados.
        </DialogComponent>)

}

export default FormDialogError;