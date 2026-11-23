document.querySelectorAll('.filtro-btn:not(.btn-pdf)').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn:not(.btn-pdf)').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});
