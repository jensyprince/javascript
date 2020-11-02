// "1" > 1 using the number function to turn the string number we get from the prompt into a number type
const firstNumber = Number(prompt("Please enter your first number"))
const operator = prompt("Please enter your operator (+, -, /, *)");
const secondNumber = Number(prompt("Please enter your second number"))

switch (operator) {
    case "*":
        const multiplyValue = multiply(firstNumber,secondNumber)
        alert(`${firstNumber} ${operator} ${secondNumber} = ${multiplyValue}`)
        break
    case "/":
        const divideValue = divide(firstNumber,secondNumber)
        alert(`${firstNumber} ${operator} ${secondNumber} = ${divideValue}`)
        break
    case "+":
        const addValue = add(firstNumber,secondNumber)
        alert(`${firstNumber} ${operator} ${secondNumber} = ${addValue}`)
        break
    case "-":
        const subtractValue = subtract(firstNumber,secondNumber)
        alert(`${firstNumber} ${operator} ${secondNumber} = ${subtractValue}`)
        break
    default:
        alert("Please choose the right operator (+, -, /, *)")
}

function add(firstNum, secondNum) {
    return firstNum + secondNum  
}
function subtract(firstNum, secondNum) {
    return firstNum - secondNum
}
function multiply(firstNum, secondNum) {
    return firstNum * secondNum
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum
} 