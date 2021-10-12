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

function tipFivePercent() {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*5).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*5).toFixed(2)
  disableButton()
  }
}

function tipTenPercent() {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*10).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*10).toFixed(2)
  disableButton()
  }
}

function tipFifthteenPercent() {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*15).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*15).toFixed(2)
  disableButton()
  }
}

function tipTwentyfivePercent() {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*25).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*25).toFixed(2)
  disableButton()
  }
}

function tipFifthtyPercent() {
  if (billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*50).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*50).toFixed(2)
  disableButton()
  }
}

function tipCustomPercent() {
  if (inputCustom.value >= 0 && billInput.value >= 1 && peopleInput.value >= 1) {
  tipTotal.textContent = '₪'+ (billInput.value/100*inputCustom.value).toFixed(2)
  tipAmount.textContent = '₪'+ (billInput.value/peopleInput.value/100*inputCustom.value).toFixed(2)
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

buttonFive.addEventListener('click', tipFivePercent)
buttonTen.addEventListener('click', tipTenPercent)
buttonFifthteen.addEventListener('click', tipFifthteenPercent)
buttonTwentyfive.addEventListener('click', tipTwentyfivePercent)
buttonFifthty.addEventListener('click', tipFifthtyPercent)
resetButton.addEventListener('click', resetTips)
peopleInput.addEventListener('input', checkPeople)
inputCustom.addEventListener('input', tipCustomPercent)

