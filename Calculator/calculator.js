let displayBox = document.getElementById("displayBox")
let number

let display = (input) => {
    displayBox.value += input
}

let clearDisplay  = () => {
    displayBox.value = ""
    isOpenBracket = false
}

let isOpenBracket = false;

let displayBracket = () => {
    isOpenBracket = !isOpenBracket
    if (isOpenBracket) {
        displayBox.value += '(';
    } else {
        displayBox.value +=')';
    }
}

calculatePercentage = () => {
    number = Number(displayBox.value) 
    number = number / 100
    displayBox.value = number
}

calculate = () => {
    try {
        displayBox.value = eval(displayBox.value)
    } catch (error) {
        displayBox.value = "Error"
    }
}


