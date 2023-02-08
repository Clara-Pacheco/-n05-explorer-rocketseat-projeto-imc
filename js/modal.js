 export const Modal = {
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

Modal.btnClose.addEventListener('click',() => {
  Modal.close()
})

window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && Modal.wrapper.classList.contains('open')){
    Modal.wrapper.classList.remove('open')
  }


})