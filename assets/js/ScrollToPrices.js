const buttons = document.querySelectorAll('[data-botao]')

buttons.forEach(btn => {
  btn.addEventListener('click', ScrollToPrices)
})

export function ScrollToPrices() {
  const vh = window.innerHeight
  window.scroll({
    top: vh * 4,
    behavior: 'smooth'
  })
}
