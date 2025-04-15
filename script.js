document.getElementById('entrarBtn').addEventListener('click', () => {
    const musica = document.getElementById('musica');
    const intro = document.getElementById('intro');
    const conteudo = document.getElementById('conteudo');
  
    // Toca a música
    musica.play().catch((err) => {
      console.log('Erro ao tocar música:', err);
    });
  
    // Oculta a tela de entrada e mostra o conteúdo
    intro.style.display = 'none';
    conteudo.classList.remove('hidden');
  });
  