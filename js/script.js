import { Modal } from './modal.js'
import { Alert } from './alert-error.js'
import { IMC, notANumber} from './functions.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

function displayIMCResult(weight,height){
  const imcResult = IMC(weight,height)

  Modal.open()
  Modal.message.innerText = `O seu IMC é de ${imcResult}`
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  if(notANumber(weight) || notANumber(height)){
    Alert.open()
    return
  }else{
    Alert.close()
    displayIMCResult(weight,height)
  }

})

// inputWeight.addEventListener('click',()=>{
//   Alert.close()
// })

// inputHeight.addEventListener('click',()=>{
//   Alert.close()
// })

inputWeight.addEventListener('input',()=>{
  Alert.close()
})

inputHeight.addEventListener('input',()=>{
  Alert.close()
})



