import bus from '/es6/helpers/bus.js'
import keyboard from '/es6/helpers/keyboard.js'

import scroll from '/es6/components/scroll.js'
import nav from '/es6/components/nav.js'

const init = () => {
  // keyboard()
  // scroll()
  // nav()
}

var app = {
  channel: 'app:init',
  description: 'Initializes application',
  emits: 'N/A',
  listeners: []
}

bus.register(app)
bus.on('app:init', init)
bus.emit('app:init')

console.log(bus.channels)
