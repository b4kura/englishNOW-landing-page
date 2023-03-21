const navbar = document.querySelector('#menu-bar')

export function TranslucentToggle() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.className = 'menu-bar menu-translucido'
  } else {
    navbar.className = 'menu-bar'
  }
}