const trigger = document.getElementById('hamburger-trigger');
const menu = document.getElementById('hamburger-menu');
const content = document.getElementById('content');
const hamItems = document.getElementsByClassName('ham-item');

trigger.addEventListener('click', () => {
  menu.classList.toggle('show-hamburger');
  content.classList.toggle('blur');
});


[...hamItems].forEach((hamItem) => {
  hamItem.addEventListener('click', () => {
    menu.classList.remove('show-hamburger');
    content.classList.remove('blur');
  });
})
