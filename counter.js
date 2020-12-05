const upperBound = 10
const lowerBound = 0
const maxMessage = document.getElementById("max-message")
const minMessage = document.getElementById("min-message")

function incrementOne() {
    let value = document.getElementById("count")
    let number = parseInt(value.innerHTML)

    if(number >= upperBound){
        value.innerHTML = number
        maxMessage.style.display = "block"
        minMessage.style.display = "none"
    }
    else {
        number++
        value.innerHTML = number
        maxMessage.style.display = "none"
        minMessage.style.display = "none"
    }
}

function decrementOne() {
    let value = document.getElementById("count")
    let number = parseInt(value.innerHTML)

    if(number <= 0){
        value.innerHTML = number
        minMessage.style.display = "block"
        maxMessage.style.display = "none"
    }
    else {
        number--
        value.innerHTML = number
        minMessage.style.display = "none"
        maxMessage.style.display = "none"
    }
}

function incrementThree() {
    let value = document.getElementById("count")
    let number = parseInt(value.innerHTML)

    if(number + 3 >= upperBound){
        value.innerHTML = "10"
        maxMessage.style.display = "block"
        minMessage.style.display = "none"
    }
    else {
        number + 3
        value.innerHTML = number + 3
        maxMessage.style.display = "none"
        minMessage.style.display = "none"
    }
}

function decrementThree() {
    let value = document.getElementById("count")
    let number = parseInt(value.innerHTML)

    if(number -3 <= 0){
        value.innerHTML = "0"
        minMessage.style.display = "block"
        maxMessage.style.display = "none"
    }
    else {
        number + 3
        value.innerHTML = number - 3
        minMessage.style.display = "none"
        maxMessage.style.display = "none"
    } 
}