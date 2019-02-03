import bus from './bus.js'

const keyboard = () => {
  document.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      bus.emit('keyboard:escape')
    } else if (e.keyCode === 13) {
      bus.emit('keyboard:return')
    } else if (e.keyCode === 32) {
      bus.emit('keyboard:space')
    } else if (e.keyCode === 38) {
      bus.emit('keyboard:arrow:up')
    } else if (e.keyCode === 40) {
      bus.emit('keyboard:arrow:down')
    } else if (e.keyCode === 37) {
      bus.emit('keyboard:arrow:left')
    } else if (e.keyCode === 39) {
      bus.emit('keyboard:arrow:right')
    }
  })
}

export default keyboard
