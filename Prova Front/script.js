const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback');

    if (!nome || !email || !assunto || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = "red";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Por favor, insira um e-mail válido.";
      feedback.style.color = "red";
      return;
    }

    if (mensagem.length < 20) {
      feedback.textContent = "A mensagem deve conter pelo menos 20 caracteres.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    feedback.style.color = "green";
    form.reset();
  });
}

const imagensGaleria = document.querySelectorAll('.galeria img');
imagensGaleria.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.classList.add('hovered');
  });
  img.addEventListener('mouseout', () => {
    img.classList.remove('hovered');
  });
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hovered');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hovered');
  });
});
