//hamburger menu
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('show');
});

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});