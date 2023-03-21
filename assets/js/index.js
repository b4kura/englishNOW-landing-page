import { TranslucentToggle } from './TranslucentToggle.js'
import { Teleport } from './SectionTeleport.js'
import { PriceInteractions } from './PriceInteractions.js'
import { ScrollToPrices } from './ScrollToPrices.js'

const buttons = document.querySelectorAll('[data-botao]')

buttons.forEach(btn => {
  btn.addEventListener('click', ScrollToPrices)
})

window.onscroll = function() {
  TranslucentToggle()
}