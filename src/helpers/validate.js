import Swal from 'sweetalert2';

function validate(values) {

    if (values.nombre.length < 4){
        Swal.fire({
            icon: "error",
            title: "Nombre incorrecto"
        })
        return false
    }
    if (values.apellido.length < 4){
        Swal.fire({
            icon: "error",
            title: "Apellido incorrecto"
        })
        return false
    }
    if (values.telefono.length < 4){
        Swal.fire({
            icon: "error",
            title: "Teléfono incorrecto"
        })
        return false
    }     
    if (values.email.length < 4){
        Swal.fire({
            icon: "error",
            title: "E-mail incorrecto"
        })
        return false
    }
    if (values.emailConfirm !== values.email){
        Swal.fire({
            icon: "error",
            title: "E-mails no coinciden"
        })
        return false
    }

    return true
}

export default validate