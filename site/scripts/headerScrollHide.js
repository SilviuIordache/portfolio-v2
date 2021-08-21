export function headerScrollHide() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if ( prevScrollpos < currentScrollPos && window.scrollY > 200) {
      document.getElementById("header").style.top = '-100px';
    } else {
      document.getElementById("header").style.top = '0';
    }
    prevScrollpos = currentScrollPos;
  }
}