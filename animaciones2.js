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