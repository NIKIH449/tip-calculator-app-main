const page = document.querySelector('.page')
const billInput = page.querySelector('.calculator__input_type_bill')
const peopleInput = page.querySelector('.calculator__input_type_people')
const resetButton = page.querySelector('.calculator__button-reset')
const tipAmount = page.querySelector('.calculator__calculated-sum_type_amount')
const tipTotal = page.querySelector('.calculator__calculated-sum_type_total')
const buttonFive = page.querySelector('.calculator__tip_type_five')
const buttonTen = page.querySelector('.calculator__tip_type_ten')
const buttonFifthteen = page.querySelector('.calculator__tip_type_fifthteen')
const buttonTwentyfive = page.querySelector('.calculator__tip_type_twentyfive')
const buttonFifthty = page.querySelector('.calculator__tip_type_fifthty')
const buttonCustom = page.querySelector('.calculator__tip_type_custom')
const inputCustom = page.querySelector('.calculator__input_type_custom')
const inputError = page.querySelector('.calculator__input-error')

function disableButton() {
  resetButton.removeAttribute('disabled')
}

function calculateTips(percent) {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
    tipTotal.textContent = '₪'+ (billInput.value/100*percent).toFixed(2)
    tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*percent).toFixed(2)
    disableButton()
  }
}

function calculateCustomPercent() {
  if (inputCustom.value >= 0 && billInput.value >= 1 && peopleInput.value >= 1) {
    calculateTips(inputCustom.value)
    disableButton()
  }
}

function resetTips() {
  tipTotal.textContent = '₪0.00'
  tipAmount.textContent = '₪0.00'
  billInput.value = ''
  peopleInput.value = ''
  inputCustom.value = ''
  resetButton.setAttribute('disabled', true)
}

function checkPeople() {
  if ((peopleInput.value <= 0)) {
    inputError.classList.add('calculator__input-error_active')
    tipTotal.textContent = '₪0.00'
    tipAmount.textContent = '₪0.00'
  } else {
    inputError.classList.remove('calculator__input-error_active')
  }
}

buttonFive.addEventListener('click', () => {
  calculateTips(5)
})
buttonTen.addEventListener('click', () => {
  calculateTips(10)
})
buttonFifthteen.addEventListener('click', () => {
  calculateTips(15)
})
buttonTwentyfive.addEventListener('click', () => {
  calculateTips(25)
})
buttonFifthty.addEventListener('click', () => {
  calculateTips(50)
})
inputCustom.addEventListener('input', calculateCustomPercent)
resetButton.addEventListener('click', resetTips)
peopleInput.addEventListener('input', checkPeople)