const trigger = document.getElementById('hamburger-trigger');
const hamOpen = document.getElementById('ham-open');
const hamClose = document.getElementById('ham-close');
const hamMenu = document.getElementById('hamburger-menu');
const content = document.getElementById('content');
const body = document.body;
const hamItems = document.getElementsByClassName('ham-item');

function openHamburger() {
  hamMenu.classList.toggle('show-hamburger');
  content.classList.toggle('blur');
  body.classList.toggle('scroll-lock');
  hamOpen.classList.toggle('d-none');
  hamClose.classList.toggle('d-none');
}

function closeHamurger() {
  hamMenu.classList.remove('show-hamburger');
  content.classList.remove('blur');
  body.classList.toggle('scroll-lock');
  hamOpen.classList.toggle('d-none');
  hamClose.classList.toggle('d-none');
}

trigger.addEventListener('click', () => {
  openHamburger();
});

[...hamItems].forEach((hamItem) => {
  hamItem.addEventListener('click', () => {
    closeHamurger();
  });
});
