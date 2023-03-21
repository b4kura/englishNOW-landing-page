const menuLinks = document.querySelectorAll('[data-menu]')

const sections = {
  'sobre': 1,
  'tutores': 2,
  'depoimentos': 3,
  'planos': 4
}

menuLinks.forEach(sectionLink => {
  sectionLink.addEventListener('click', Teleport)
})

export function Teleport(evt) {
  evt.preventDefault()
  const vh = window.innerHeight
  const clickedLink = evt.target
  window.scroll({
    top: vh * sections[clickedLink.dataset.menu],
    behavior: "smooth"
  }) 
}
