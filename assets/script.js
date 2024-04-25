// sticky navbar
let navbar = document.getElementById('navbar')


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('sticky')
  }
  else {
    navbar.classList.remove('sticky')
  }
})