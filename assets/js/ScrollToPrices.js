
export function ScrollToPrices() {
  const vh = window.innerHeight
  window.scroll({
    top: vh * 4,
    behavior: 'smooth'
  })
}
