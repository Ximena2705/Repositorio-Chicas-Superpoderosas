// Seleccionamos todos los elementos con la clase 'like'
const likes = document.querySelectorAll('.like');

// Iteramos sobre cada elemento
likes.forEach(like => {
  // Añadimos un event listener para el evento 'click'
  like.addEventListener('click', function() {
    // Toggle de la clase 'clicked' al elemento padre
    this.parentElement.parentElement.classList.toggle('clicked');
  });
});

function enviarComentario() {
  var comentario = document.getElementById("comment").value;
  // Aquí puedes hacer algo con el comentario, como enviarlo a un servidor o mostrarlo en la página.
  // Por ejemplo, puedes agregar el código para mostrar el comentario en la página.
  alert("Comentario enviado: " + comentario);
  
  // Limpiar el contenido del cuadro de texto
  document.getElementById("comment").value = "";
}