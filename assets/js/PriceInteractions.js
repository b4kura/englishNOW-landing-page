const optionsElements = document.querySelectorAll('[data-opcao]')

optionsElements.forEach(opcao => {
  opcao.addEventListener('click', PriceInteractions)
})

export function PriceInteractions(evt) {
  const currentOption = evt.target
  removeChosenOptions()
  currentOption.classList = 'opcao opcao-escolhida'
  changePrices(evt)
}

function removeChosenOptions() {
  optionsElements.forEach(el => {
    el.classList = 'opcao'
  })
}

function chooseOption(evt) {
  const currentElement = evt.target
  console.log(evt.target.dataset.opcao)
}

function changePrices(evt) {
  const prices = {
    'basic': {
      'old': '59,99',
      'new': 39
    },
    'standart': {
      'old': '129,99',
      'new': 59
    },
    'premium': {
      'old': '159,99',
      'new': 99
    }
  }
  const currentPlan = evt.target.dataset.opcao
  const valorAntigoEl = document.querySelector('#valor-antigo')
  const valorAtualEl = document.querySelector('#valor-atual') 
  valorAntigoEl.innerHTML = prices[currentPlan]['old']
  valorAtualEl.innerHTML = prices[currentPlan]['new'] + '<span class="centavos">,90</span>'
}