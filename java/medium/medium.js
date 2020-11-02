const userInput = prompt("Please enter anything");

if(userInput === userInput.toUpperCase()){
    console.log("isShouting")
} else if(userInput === userInput.toLowerCase()){
    console.log("isWhispering")
} else{
    console.log("neither")
}