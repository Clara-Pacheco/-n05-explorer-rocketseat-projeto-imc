import { Modal } from './modal.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const alertError = document.querySelector('.alert-error')


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  if(notANumber(weight) || notANumber(height)){
    alertError.classList.add('open')
    return
  }else{
    alertError.classList.remove('open')
    const imcResult = IMC(weight,height)

    Modal.open()
    Modal.message.innerText = `O seu IMC é de ${imcResult}`
  }

  

})

function notANumber(value){
  return isNaN(value) || value == ""
}
