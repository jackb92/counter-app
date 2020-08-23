function incrementOne() {
    var value = document.getElementById("count")
    var number = parseInt(value.innerHTML)

    if(number >= 10){
        value.innerHTML = number
    }
    else {
        number++
        value.innerHTML = number
    }
}

function decrementOne() {
    var value = document.getElementById("count")
    var number = parseInt(value.innerHTML)

    if(number <= 0){
        value.innerHTML = number
    }
    else {
        number--
        value.innerHTML = number
    }
}

function incrementThree() {
    var value = document.getElementById("count")
    var number = parseInt(value.innerHTML)

    if(number >= 7){
        value.innerHTML = "10"
    }
    else {
        number + 3
        value.innerHTML = number + 3
    }  
}

function decrementThree() {
    var value = document.getElementById("count")
    var number = parseInt(value.innerHTML)

    if(number <= 3){
        value.innerHTML = "0"
    }
    else {
        number + 3
        value.innerHTML = number - 3
    }  
}