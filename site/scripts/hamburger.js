const trigger = document.getElementById('hamburger-trigger');
const menu = document.getElementById('hamburger-menu');
const content = document.getElementById('content');
const hamItems = document.getElementsByClassName('ham-item');

function openHamburger() {
  menu.classList.toggle('show-hamburger');
  content.classList.toggle('blur');
  document.body.classList.add('scroll-lock');
}

function closeHamurger() {
  menu.classList.remove('show-hamburger');
  content.classList.remove('blur');
  document.body.classList.remove('scroll-lock');
}

trigger.addEventListener('click', () => {
  openHamburger();
});

[...hamItems].forEach((hamItem) => {
  hamItem.addEventListener('click', () => {
    closeHamurger();
  });
});

content.addEventListener('click', () => {
  closeHamurger();
})