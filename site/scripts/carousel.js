function initCarousel() {
  // const carousel = document.querySelector(`[carousel-id="${id}"]`);
  const carousel = document.getElementById('carousel-container');
  console.log(carousel);
  new Splide( carousel, {
    perPage    : 1,
    height     : '20rem',
    cover      : true,
    lazyLoad: 'nearby',
    breakpoints: {
      height: '6rem',
    }
  }).mount();
}

const carouselContainer = document.getElementById('carousel-outer-container');
const carouselCloseButton = document.getElementById('carousel-close');
const carouselTriggers = document.getElementsByClassName('outer-image-container');

// ----- FUNCTIONS -----

// show carousel modal
function displayCarousel() {
  const carousel = document.getElementById('carousel-outer-container');
  carousel.style.display = 'block';

  carouselContainer.classList.remove('animation-fadeout');
  carouselContainer.classList.add('animation-fadein');
}

// close carousel modal
function closeCarousel() {
  // play animations
  carouselContainer.classList.remove('animation-fadein');
  carouselContainer.classList.add('animation-fadeout');

  // after animation duration hide the element
  setTimeout(() => {
    carouselContainer.style.display = 'none';
    document.body.classList.toggle('scroll-lock');
  }, 250)
}


// ------ ADD EVENT LISTENERS ------
[...carouselTriggers].forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // grab image ID
    const imageID = e.target.dataset.id;

    // grab image path
    const imagePath = e.target.dataset.path;

    // toggle carousel into view on click
    displayCarousel();

    // set carousel image src to the path grabbed above
    const zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = imagePath;

    // disable scrolling when the modal is open
    document.body.classList.toggle('scroll-lock');

    // initialize the SplideJS
    // initCarousel()
  })
});

carouselCloseButton.addEventListener('click', () => {
  closeCarousel();
});

carouselContainer.addEventListener('click', (e) => {
  if(e.target === carouselContainer) {
    closeCarousel();
  }
})