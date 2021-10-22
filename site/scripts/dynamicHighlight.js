const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName('header-item');

//calculate sections offsetTop and heights
const secDetails = [];
sections.forEach( section => {
  secDetails.push({
    name: section.getAttribute('id'),
    height: section.clientHeight,
    offsetTop: section.offsetTop
  })
});

// on scroll, determine which section is currently in view
window.addEventListener('scroll', () => {
  let sectionInView = '';
  sectionInView = secDetails.find( (section) => {
    return section.offsetTop > (pageYOffset - section.height / 3 )
  });
  
  if (sectionInView) {
    // highlight in the navitems
    [...navItems].forEach( navItem => {
      // remove active class from all
      navItem.classList.remove('active');

      // add active class to the element corresponding to the section in view
      if(sectionInView.name.length > 0 && navItem.href.includes(sectionInView.name)) {
        navItem.classList.add('active')
      }
    });
  }
});