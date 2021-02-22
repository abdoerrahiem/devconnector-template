const hamburger = document.querySelector('#hamburger')
const links = document.querySelector('#links')

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('open')) {
    hamburger.classList.remove('open')
    links.classList.remove('show')
  } else {
    hamburger.classList.add('open')
    links.classList.add('show')
  }
})
