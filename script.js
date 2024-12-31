const messageText = document.querySelector('.message'); // Este es el mensaje "Para Isis"
const countdownElement = document.getElementById('countdown');

// Configuramos el tiempo objetivo a 3 minutos (3 * 60 * 1000 ms)
const targetDate = new Date().getTime() + 3 * 60 * 1000; // 3 minutos desde ahora

// Reproducir la canción cuando se hace clic en cualquier parte de la página
const audioPlayer = document.getElementById('audioPlayer');
let isAudioPlaying = false; // Variable para verificar si el audio se ha reproducido

// Función para reproducir el audio al hacer clic en la página
document.body.addEventListener('click', function() {
  if (!isAudioPlaying) {
    audioPlayer.play(); // Reproducir la canción
    isAudioPlaying = true; // Evitar que se reproduzca más de una vez
  }
});

// Función para actualizar el contador
function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    countdownElement.textContent = '¡Ya puedes descargar la carta!';
    messageText.style.cursor = 'pointer'; // Cambia el cursor para indicar que es clickeable
    messageText.addEventListener('click', downloadPDF); // Asocia el evento de clic a la descarga
    clearInterval(countdownInterval);
    return;
  }

  const minutes = Math.floor(difference / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElement.textContent = `${minutes}m ${seconds}s`;
}

// Función para descargar el PDF cuando se haga clic en el mensaje
function downloadPDF() {
  const link = document.createElement('a');
  link.href = './assets/cartaamor.pdf'; // Ruta del archivo PDF
  link.download = 'cartaamor.pdf'; // Nombre con el que se descargará el archivo
  link.click();
}

// Ejecuta la función cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
