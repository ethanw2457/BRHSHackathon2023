let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('nav').classList.remove('navbar-hidden');
  } else {
    document.querySelector('nav').classList.add('navbar-hidden');
  }
  prevScrollPos = currentScrollPos;
}
