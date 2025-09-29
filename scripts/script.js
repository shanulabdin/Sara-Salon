const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const on = menuToggle.classList.toggle('active');
  menu.classList.toggle('active', on);
});
