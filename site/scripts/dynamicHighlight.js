export function dynamicHighlight() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('header ul li a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight/3)) {
        current = section.getAttribute('id');
      }
    }) 
  
    navItems.forEach( navItem => {
      navItem.classList.remove('active');
  
      if(navItem.href.includes(current)) {
        navItem.classList.add('active')
      }
    })
  });

}