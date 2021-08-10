// ------ HEADER HIDE ------
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.scrollY;

//   if ( prevScrollpos < currentScrollPos && window.scrollY > 200) {
//     document.getElementById("header").style.top = '-100px';
//   } else {
//     document.getElementById("header").style.top = '0';
//   }
//   prevScrollpos = currentScrollPos;
// }


// ----- ACTIVE HEADER ELEMENT LOGIC -------
// get all header items
const headerElements = document.getElementsByClassName('header-item');

// for each, add an onclick handler
for (let i = 0; i < headerElements.length; i++) {
  headerElements[i].onclick = function makeElementActive() {
    // remove active from all elements
    for (let i = 0; i < headerElements.length; i++) {
      headerElements[i].classList.remove('active');
    }
    // add it to the clicked one
    headerElements[i].classList.add('active')
  }
}