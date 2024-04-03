const button = document.querySelector("button")
const modal = document.querySelector ("dialog") 
const buttonClose = document.querySelector ("dialog button")

button.onclick = function (){
    modal.showModal ()
}  //chamei o popup/Modal

buttonClose.onclick = function(){
    modal.close ()
}