export function customCursor() {
  const cursor = document.getElementById('cursor');
  // document.addEventListener('mousemove', makeCursorFollow);
  document.addEventListener('scroll', makeCursorFollow);
  
  function makeCursorFollow(e) {
    const cursorSizeOffset = -5
    cursor.style.left = e.clientX + cursorSizeOffset + 'px';
    cursor.style.top += e.clientY + cursorSizeOffset + window.pageYOffset + 'px';
    // cursor.style.top += window.pageYOffset + 'px';
    console.log(window.pageYOffset)
  }

  // function adjustCursorOnScroll(e) {
  //   cursor.style.top = e.clientY + window.pageYOffset + 'px';
  // }
}