const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
  closeButton.classList.toggle('active');
})