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

const carouselTriggers = document.getElementsByClassName('outer-image-container');

[...carouselTriggers].forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // grab image ID
    const imageID = e.target.dataset.id;

    // toggle carousel into view on click
    const carousel = document.getElementById('carousel-outer-container');
    carousel.style.display = 'block';

    // disable scrolling when the modal is open
    document.body.classList.toggle('scroll-lock');

    // initialize the SplideJS
    // initCarousel()
  })
});


// carousel close modal logic
const carouselContainer = document.getElementById('carousel-outer-container');
const carouselCloseButton = document.getElementById('carousel-close');

function closeCarousel() {
  carouselContainer.style.display = 'none';
  document.body.classList.toggle('scroll-lock');
}

carouselCloseButton.addEventListener('click', () => {
  closeCarousel();
});

carouselContainer.addEventListener('click', (e) => {
  if(e.target === carouselContainer) {
    closeCarousel();
  }
})