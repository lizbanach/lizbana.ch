// active nav link

var currentUrl = window.location.pathname;

const activeNav = () => {
  let links = Array(...document.querySelectorAll('.nav-link'))
  links.forEach(link => {
    link.classList.remove('is-active');
    var url = link.getAttribute('href');
    if (url == currentUrl) {
      link.classList.add('is-active');
    }
  })
}

const activeBooksLink = () => {
  var booksLink = document.querySelector('.js-books-link')
  booksLink.classList.remove('is-active');
  if (currentUrl == '/') {
    booksLink.classList.add('is-active');
  }
}

const nav = () => {
  activeNav()
  activeBooksLink()
}

export default nav
