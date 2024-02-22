// variable

const openBtn = document.querySelector(".openBtn")
const closeBtn = document.querySelector(".closeBtn")
const container = document.querySelector(".container")

// addEventListener

openBtn.addEventListener('click', function(){

    container.style.display = "block"

})
closeBtn.addEventListener('click', function(){

    container.style.display = "none"

})

window.addEventListener('click', function(e){

    if( e.target === container){

        container.style.display = "none"
    }


})