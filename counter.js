function incrementOne() {
    var value = document.getElementById("count")
    var string = value.innerHTML
    var number = parseInt(string)

    if(number >= 10){
        value.innerHTML = number.toString()
    }

    else {
        number++
        value.innerHTML = number.toString()
    }
}

function decrementOne() {
    var value = document.getElementById("count")
    var string = value.innerHTML
    var number = parseInt(string)
    number--
    value.innerHTML = number.toString()
}