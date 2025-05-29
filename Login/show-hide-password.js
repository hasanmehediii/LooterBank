document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('#togglePassword');
  toggleButtons.forEach(button => {
    const input = button.previousElementSibling;

    button.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
      } else {
        input.type = 'password';
        button.textContent = '👁️';
      }
    });
  });
});
