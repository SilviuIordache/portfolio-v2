window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // console.log(window.scrollY)

  if (window.scrollY > 150) {
    document.getElementById("header").classList.remove('py-4');
    document.getElementById("header").classList.add('py-3');
  } else {
    document.getElementById("header").classList.remove('py-3');
    document.getElementById("header").classList.add('py-4');
  }
}

var timer = null;
window.addEventListener('scroll', function() {
  if(timer !== null) {
    clearTimeout(timer);        
  }
  timer = setTimeout(function() {
    // console.log('user stopped scrolling')
  }, 150);
}, false);