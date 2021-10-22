function toggleProjectModal(id) {
  const projModal = document.querySelector(`[proj-modal-id="${id}"]`);
  projModal.classList.toggle('hidden');
  document.body.classList.toggle('scroll-lock');

  initCarousel(id);
}

function initCarousel(id) {
  const carousel = document.querySelector(`[carousel-id="${id}"]`);

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

// Opening project modals
const projectModalTriggers = document.getElementsByClassName('proj-details-btn');
[...projectModalTriggers].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // grab id of element from button
      const id = e.target.dataset.id;
      toggleProjectModal(id);
    });
  }
);

// Closing project modals
const modalCloseButtons = document.getElementsByClassName('proj-modal-close-btn');
[...modalCloseButtons].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // grab id of element from button
      const id = e.target.dataset.id;
      toggleProjectModal(id);
    });
  }
);

const modalBackgrounds = document.getElementsByClassName('modal-background');
[...modalBackgrounds].forEach((bkg) => {
  bkg.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    toggleProjectModal(id);
  })
});