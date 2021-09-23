export function goTopArrow() {
  
  window.addEventListener('scroll', () => {
    const arrow = document.getElementById('go-top-arrow');

    if (pageYOffset > 300) {
      arrow.classList.remove('hidden');
    } else {
      arrow.classList.add('hidden');
    }
  });

}