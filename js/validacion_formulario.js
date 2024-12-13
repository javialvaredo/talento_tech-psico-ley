document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.querySelector(".formulario-contacto");

  if (formContacto) {
    formContacto.addEventListener("submit", validar);
    formContacto.addEventListener("reset", confirmar);
  }
});

// Validar el formulario antes de enviarlo
const validar = (evento) => {
  if (
    validarNombre() &&
    validarApellido() &&
    validarEmail() &&
    validarTelefono() &&
    validarMensaje() &&
    confirm("Revise los datos y pulse aceptar para enviar el formulario")
  ) {
    alert("Formulario enviado correctamente")
    return true; // Permite el envío
  } else {
    evento.preventDefault(); // Evita el envío si hay errores
    return false;
  }
};

// Confirmar el reset del formulario
const confirmar = (evento) => {
  const confirma = confirm("¿Estás seguro de que deseas borrar el formulario?");
  if (!confirma) {
    evento.preventDefault(); // Evita el reset si se cancela
  }
};

// Validaciones para los campos vacios del formulario, si es cadena vacia es un valor falsy
const validarCampoVacio = (selector, mensaje) => {
  const elemento = document.querySelector(selector).value.trim();
  if (!elemento) {
    alert(mensaje);
    return false;
  }
  return true;
};

const validarNombre = () => validarCampoVacio("#name", "El campo Nombre no puede estar vacío");
const validarApellido = () => validarCampoVacio("#surname", "El campo Apellido no puede estar vacío");
const validarEmailVacio = () => validarCampoVacio("#mail", "El campo email no puede estar vacío");
const validarTelefonoVacio = () => validarCampoVacio("#phone", "El campo telefono no puede estar vacío");
const validarMensaje = () => validarCampoVacio("#msg", "El campo Mensaje no puede estar vacío");




//-------Validaciones especificas de cada input utilizando REGEX----------------


const validarEmail = () => {
  const email = document.querySelector("#mail").value.trim();
  if (!validarEmailVacio()) {
    return;
  } else {

    const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!email || !validarEmail.test(email)) {
      alert("Email inválido, corregir el campo");
      return false;
    }
    return true;
  }
};

const validarTelefono = () => {
  const telefono = document.querySelector("#phone").value.trim();
  const regexTelefono = /^[0-9()\-\s]+$/;
  if (!validarTelefonoVacio()) {
    return;
  } else {

    if (!regexTelefono.test(telefono)) {
      alert("ingresar números, paréntesis (), guiones - y espacios.");
      return false;
    }
  
    return true;
  }
};
