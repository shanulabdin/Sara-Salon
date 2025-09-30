const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const on = menuToggle.classList.toggle('active');
  menu.classList.toggle('active', on);
});


// navbar appearing on scroll 
const nav = document.querySelector('nav');
const home = document.querySelector('#home');

const navHeight = nav.getBoundingClientRect().height;

const observer = new IntersectionObserver(
  ([entry]) => {
    nav.classList.toggle('scrolled', !entry.isIntersecting);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px 0px 0px 0px`
  }
);

observer.observe(home)