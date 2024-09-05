
document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;
    const totalImages = images.length;
    const interval = 4000; // Tiempo en milisegundos (4 segundos)

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        sliderImages.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, interval);
});

document.getElementById('form').addEventListener('submit', function(){

    

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const material = document.getElementById('material').value.trim();
    const elemento = document.getElementById('numeroelemento').value.trim();
    
     // Mensaje de error
  let errorMessage = '';

  // Validaciones
  if (nombre === '') {
    errorMessage += 'El nombre no puede estar vacío. ';
  }
  
  if (correo === '') {
    errorMessage += 'El correo electrónico no puede estar vacío. ';
  } 
  if (material === '') {
    errorMessage += 'El material no puede estar vacío. ';
  }if (elemento === '') {
    errorMessage += 'El N° elemento no puede estar vacío. ';
  } else if (isNaN(elemento) || elemento <= 0) {
    errorMessage += 'El elemento debe ser superior a 000 positivo. ';
  }

  // Muestra errores o envía el formulario
  if (errorMessage) {
    document.getElementById('error-message').textContent = errorMessage;
  } else {
    // Aquí puedes enviar el formulario o realizar otra acción
    alert('Formulario válido y enviado.');
    // Enviar el formulario
    // this.submit();
  }


// Función para validar correos electrónicos
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
 
console.log(`nombre es : ${nombre}`);
console.log(`correo es : ${correo}`);
console.log(`material es : ${material}`);
console.log(`N° elemento es : ${elemento}`);
});
  

