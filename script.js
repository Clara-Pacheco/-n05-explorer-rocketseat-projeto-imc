const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("h2"),
  btnClose: document.querySelector(".close-button"),

  open() {
    Modal.wrapper.classList.add("open")
  },

  close() {
    Modal.wrapper.classList.remove("open")
  }
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const imcResult = IMC(weight,height)

  Modal.open()
  Modal.message.innerText = `O seu IMC é de ${imcResult}`

})

Modal.btnClose.addEventListener('click',() => {
  Modal.close()
})