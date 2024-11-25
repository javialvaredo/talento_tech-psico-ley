//Funciones para reproducir el audio al pasar con el mouse por el video de la pagina nuestros servicios


const video = document.querySelector('#video');
const audio = document.querySelector('#audio');

if (video && audio) {
  // Función para reproducir el audio 
  const startAudio = () => {
    audio.setAttribute('autoplay', 'true'); // Activa autoplay
    audio.play(); // Asegura que el audio se reproduzca
  };

  // Función para detener el audio con retardo
  const stopAudioWithDelay = () => {
    setTimeout(() => {
      audio.removeAttribute('autoplay'); // Desactiva autoplay
      audio.pause(); // Pausa el audio
      audio.currentTime = 0; // Reinicia el audio
    }, 100000); // Retardo de 1 minuto
  };

  // Asigna los eventos a los elementos
  video.addEventListener('mouseenter', startAudio); // Reproduce el audio al pasar el mouse
  video.addEventListener('mouseleave', stopAudioWithDelay); // Detiene el audio al salir
}



// Funcion para buscar elementos desde la barra de busqueda ------------------------------------

// Función para manejar el envío del formulario

function buscarEnCards(event) {
  event.preventDefault(); // Evita el refresco de la página
  const termino = document.getElementById("buscarInput").value.trim().toLowerCase();

  if (termino) {
    // Redirige a la página de servicios con el término como parámetro
    window.location.href = `../pages/nuestros_servicios.html?buscar=${encodeURIComponent(termino)}`;
  } else {
    alert("Por favor, ingresa un término para buscar.");
  }
}

// Escucha el evento de envío del formulario en index.html
document.addEventListener("DOMContentLoaded", () => {
  const formBuscar = document.querySelector("form[role='search']");
  if (formBuscar) {
    formBuscar.addEventListener("submit", buscarEnCards);
  }
});



// Función para procesar la búsqueda en la página "Nuestros Servicios"
function procesarBusqueda() {
  const params = new URLSearchParams(window.location.search);
  const termino = params.get("buscar");

  if (termino) {
    // Selecciona los textos de las tarjetas (títulos y descripciones)
    const elementosBusqueda = document.querySelectorAll(".card-title, .card-text");
    let encontrado = false;

    elementosBusqueda.forEach(elemento => {
      const textoOriginal = elemento.textContent.toLowerCase(); // Obtiene el texto en minúsculas
      const index = textoOriginal.indexOf(termino); // Busca la posición del término

      if (index !== -1) { // Si encuentra el término
        encontrado = true;

        // Resalta el texto encontrado
        const regex = new RegExp(`(${termino})`, "gi"); // Crea una expresión regular para encontrar el término
        const textoResaltado = elemento.textContent.replace(
          regex,
          `<span class="resaltar">$1</span>` // Envuelve el término en un span con clase 'resaltar'
        );
        elemento.innerHTML = textoResaltado; // Actualiza el contenido HTML del elemento

        // Desplaza hasta el elemento
        elemento.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    if (!encontrado) {
      alert("No se encontraron coincidencias con el término ingresado.");
    }
  }
}


// Escuchar eventos en las páginas
document.addEventListener("DOMContentLoaded", () => {
  const formBuscar = document.querySelector("form[role='search']");
  if (formBuscar) {
    formBuscar.addEventListener("submit", buscarEnCards);
  }

  // Procesa la búsqueda si estamos en la página "Nuestros Servicios"
  if (window.location.pathname.includes("nuestros_servicios.html")) {
    procesarBusqueda();
  }
});



