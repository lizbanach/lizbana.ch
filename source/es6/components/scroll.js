// scroll reveal

import SR from 'scrollreveal'

const sr = SR()

const mobileOptions = {
  duration: 700,
  delay: 50,
  scale: 1,
  distance: '0rem',
  opacity: 0,
  viewFactor: 0.1,
  easing: 'ease-in-out'
}

const desktopOptions = {
  duration: 700,
  scale: 1,
  distance: '0rem',
  opacity: 0,
  viewFactor: 0.8,
  easing: 'ease-in-out'
}

const reveal = () => {
  let enable = document.querySelector('.js-sr')
  if (enable) {
    if (sr.tools.isMobile()) {
      sr.reveal('.js-sr', mobileOptions)
    } else {
      sr.reveal('.js-sr', desktopOptions, 200)
    }
  }
}

const scroll = () => {
  reveal()
}

export default scroll
