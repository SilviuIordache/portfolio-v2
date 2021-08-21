export function activeHeaderItem() {
  const headerElements = document.getElementsByClassName("header-item");

  // for each, add an onclick handler
  for (let i = 0; i < headerElements.length; i++) {
    headerElements[i].onclick = function makeElementActive() {
      // remove active from all elements
      for (let i = 0; i < headerElements.length; i++) {
        headerElements[i].classList.remove("active");
      }
      // add it to the clicked one
      headerElements[i].classList.add("active");
    };
  }
}