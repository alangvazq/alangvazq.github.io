const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const titulo = document.getElementById('titulo');
const mensaje = document.getElementById('mensaje');

const form = document.getElementById('form');

let nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
let correoRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let tituloRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?'-]+$/;
let mensajeRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?'"()\-]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if(!nombre.value || !nombreRegex.test(nombre.value)) {
        isValid = false;
        nombre.classList.add('is-invalid');
    } else {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    }

    if(!correo.value || !correoRegex.test(correo.value)) {
        isValid = false;
        correo.classList.add('is-invalid');
    } else {
        correo.classList.remove('is-invalid');
        correo.classList.add('is-valid');
    }

    if(!titulo.value || !tituloRegex.test(titulo.value)) {
        isValid = false;
        titulo.classList.add('is-invalid');
    } else {
        titulo.classList.remove('is-invalid');
        titulo.classList.add('is-valid');
    }

    if(!mensaje.value || !mensajeRegex.test(mensaje.value)) {
        isValid = false;
        mensaje.classList.add('is-invalid');
    } else {
        mensaje.classList.remove('is-invalid');
        mensaje.classList.add('is-valid');
    }

    if(isValid) {
        // Mensaje de confirmación en sweetAlert2
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'Gracias por contactarnos, te responderemos lo más pronto posible.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar los campos del formulario
        nombre.value = '';
        correo.value = '';
        titulo.value = '';
        mensaje.value = '';

        // Eliminar las clases de validación
        nombre.classList.remove('is-valid');
        correo.classList.remove('is-valid');
        titulo.classList.remove('is-valid');
        mensaje.classList.remove('is-valid');
    }
});