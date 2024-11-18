//Funciones para reproducir el audio al pasar con el mouse por el video de la pagina nuestros servicios

const video = document.querySelector('#video');
const audio = document.querySelector('#audio');

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
