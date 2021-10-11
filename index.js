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

function disableButton() {
  resetButton.removeAttribute('disabled')
}
function tipFivePercent() {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*5).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*5).toFixed(2)
  disableButton()
}

function tipTenPercent() {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*10).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*10).toFixed(2)
  disableButton()
}

function tipFifthteenPercent() {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*15).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*15).toFixed(2)
  disableButton()
}

function tipTwentyfivePercent() {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*25).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*25).toFixed(2)
  disableButton()
}

function tipFifthtyPercent() {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*50).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*50).toFixed(2)
  disableButton()
}

function tipCustomPercent() {
  if (inputCustom.value >= 0) {
  tipTotal.textContent = '₪'+ Math.abs(billInput.value/100*inputCustom.value).toFixed(2)
  tipAmount.textContent = '₪'+ Math.abs(billInput.value/peopleInput.value/100*inputCustom.value).toFixed(2)
  disableButton()
  }
}

function resetTips() {
  tipTotal.textContent = '₪0.00'
  tipAmount.textContent = '₪0.00'
  billInput.value = 0
  peopleInput.value = 1
  resetButton.setAttribute('disabled', true)
}

function resetInput() {
  inputCustom.value = ''
}

function checkPeople() {
  if ((peopleInput.value <= 0)) {
    document.querySelector('.calculator__input-error').classList.add('calculator__input-error_active')
    tipTotal.textContent = '₪0.00'
    tipAmount.textContent = '₪0.00'
  } else {
    document.querySelector('.calculator__input-error').classList.remove('calculator__input-error_active')
    tipCustomPercent()
  }
}

function checkBill() {
  if (billInput.value <= 0) {
    tipTotal.textContent = '₪0.00'
    tipAmount.textContent = '₪0.00'
  }
}
buttonFive.addEventListener('click', tipFivePercent)
buttonTen.addEventListener('click', tipTenPercent)
buttonFifthteen.addEventListener('click', tipFifthteenPercent)
buttonTwentyfive.addEventListener('click', tipTwentyfivePercent)
buttonFifthty.addEventListener('click', tipFifthtyPercent)
resetButton.addEventListener('click', resetTips)
billInput.addEventListener('input', tipCustomPercent)
billInput.addEventListener('input', checkBill)
peopleInput.addEventListener('input', checkPeople)
inputCustom.addEventListener('click', resetInput)
inputCustom.addEventListener('input', tipCustomPercent)

