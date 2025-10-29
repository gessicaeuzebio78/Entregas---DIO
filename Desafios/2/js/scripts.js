// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode integrar com API ou serviço de e-mail
    console.log('Enviando mensagem:', { name, email, message });

    // Simulação de envio
    alert('Obrigado pela sua mensagem! Eu entrarei em contato em breve.');

    form.reset();
  });
});
