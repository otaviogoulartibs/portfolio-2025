document.addEventListener('DOMContentLoaded', function() {
    // Animação do texto digitando
    const typingText = document.getElementById('typing-text');
    setTimeout(() => {
      typingText.style.animationPlayState = 'running';
    }, 1000);
  
    // Animação da imagem "Sobre"
    const sobreH2 = document.querySelector('.sobre-h2');
    const sobreImg = document.querySelector('.sobre-img img');
  
    function verificarVisibilidade() {
      if (estaVisivel(sobreH2)) {
        sobreImg.classList.add('apareceu');
        window.removeEventListener('scroll', verificarVisibilidade); 
      }
    }
  
    function estaVisivel(elemento) {
      const rect = elemento.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade();
  });