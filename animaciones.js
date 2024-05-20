document.addEventListener("DOMContentLoaded", function() {
    // Lista de imágenes
    var imagenes = ["imagenes/biblioteca/42.1-1024x682.jpg", "imagenes/biblioteca/45-1024x682.jpg", "imagenes/biblioteca/48-1024x682.jpg", "imagenes/biblioteca/50-1024x682.jpg"];
    var indice = 0;
  
    // Función para cambiar la imagen
    function cambiarImagen() {
      var imagenActual = document.getElementById("imagen" + (indice + 1)); // Selecciona la imagen actual
      var siguienteIndice = (indice + 1) % imagenes.length; // Calcula el índice de la siguiente imagen
      var siguienteImagen = document.getElementById("imagen" + (siguienteIndice + 1)); // Selecciona la siguiente imagen
  
      imagenActual.style.display = "none"; // Oculta la imagen actual
      siguienteImagen.style.display = "block"; // Muestra la siguiente imagen
  
      indice = siguienteIndice; // Actualiza el índice
    }
  
    // Oculta las imágenes adicionales inicialmente
    for (var i = 1; i < imagenes.length; i++) {
      document.getElementById("imagen" + (i + 1)).style.display = "none";
    }
  
    // Inicia el cambio de imagen después de un breve retraso
    setTimeout(function() {
      setInterval(cambiarImagen, 5000);
    }, 1000); // Retraso de 1 segundo
  });

