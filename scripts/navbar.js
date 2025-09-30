const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const on = menuToggle.classList.toggle('active');
  menu.classList.toggle('active', on);
});


// navbar appearing on scroll 
// simplest & snappiest
const nav = document.querySelector('nav');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 360);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();